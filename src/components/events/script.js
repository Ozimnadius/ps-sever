window.addEventListener('load', function () {
    new Events();
});

/*Удобный класс сборщик событий*/
class Events {
    constructor() {
        this.elems = document.querySelectorAll('[data-event]');
        this.menu = document.querySelector('.menu');

        this.init();
    }

    init() {
        this.elems.forEach((i) => {
            let eventName = i.dataset.event;

            switch (eventName) {
                case "openMenu":
                    i.addEventListener('click', this.openMenu.bind(this));
                    break;
                case "closeMenu":
                    i.addEventListener('click', this.closeMenu.bind(this));
                    break;
                case "openForm":
                    i.addEventListener('click', this.openForm.bind(this));
                    break;
                case "closeForm":
                    i.addEventListener('click', this.closeForm.bind(this));
                    break;
                case "up":
                    i.addEventListener('click', this.up.bind(this));
                    break;
                case "validate":
                    i.addEventListener('submit', this.validate.bind(this));
                    break;
                case "checkAccept":
                    i.addEventListener('change', this.checkAccept.bind(this));
                    break;
                default:
                    console.log("Не мое событие: " + eventName);
            }
        });

        document.querySelector('.wrapper').addEventListener('click', (e) => {
            let target = e.target;

            if (!target.closest('.menu__items') && !target.closest('[data-event="openMenu"]')) {
                this.closeMenu();
            }

            if (!target.closest('.form')) {
                this.closeForm();
            }

        });
    }

    openMenu(e) {
        e.preventDefault();
        this.menu.classList.add('active');
        document.querySelector('html').classList.add('ovh');
    }

    closeMenu(e) {
        if (e) {
            e.preventDefault();
        }
        this.menu.classList.remove('active');
        document.querySelector('html').classList.remove('ovh');
    }

    up(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    openForm(e) {
        e.preventDefault();
        let dataset = e.currentTarget.dataset,
            form = document.querySelector('#call');

        form.classList.add('active');
    }

    closeForm(e) {
        if (e) {
            e.preventDefault();
        }
        let form = document.querySelector('#call');
        form.classList.remove('active');
    }

    validate(e) {
        e.preventDefault();
        let form = e.target,
            data = $(form).serialize(),
            url = form.action;

        $.ajax({
            dataType: "json",
            type: "POST",
            url: url,
            data: data,
            success: function (result) {
                if (result.status) {
                    form.classList.add("ok");
                } else {
                    alert("Что-то пошло не так, попробуйте еще раз!!!");
                }
            },
            error: function (result) {
                alert("Что-то пошло не так, попробуйте еще раз!!!");
            },
        });

    }

    checkAccept(e) {
        let btn = e.target,
            form = btn.closest(`.${btn.dataset.target}`),
            submit = form.querySelector('[type="submit"]');

        submit.disabled = !btn.checked;
    }

}
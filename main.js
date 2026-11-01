
(function () {

    // Mobile Navigation Menu
    const t = document.querySelector('.burger');
    const m = document.querySelector('nav ul');

    t.addEventListener('click', () => {

        const o = m.classList.toggle('open');

        t.setAttribute('aria-expanded', o);

    });


    // Close Menu When a Navigation Link Is Clicked
    m.addEventListener('click', e => {

        if (e.target.tagName === 'A') {
            m.classList.remove('open');
        }

    });


    // Scroll Reveal Animation
    const io = new IntersectionObserver(es => {

        es.forEach(e => {

            if (e.isIntersecting) {

                e.target.classList.add('show');

                io.unobserve(e.target);

            }

        });

    }, {
        threshold: 0.1
    });


    // Observe All Elements with Reveal Class
    document.querySelectorAll('.reveal').forEach(el => {

        io.observe(el);

    });


    // Navigation Links
    const links = [...document.querySelectorAll('nav ul a')];


    // Active Navigation Link on Scroll
    if (document.getElementById('home')) {

        const so = new IntersectionObserver(es => {

            es.forEach(e => {

                if (e.isIntersecting) {

                    links.forEach(a => {

                        a.classList.toggle(
                            'active',
                            a.getAttribute('href').endsWith('#' + e.target.id)
                        );

                    });

                }

            });

        }, {
            rootMargin: '-45% 0px -50% 0px'
        });


        // Observe Main Sections
        ['home', 'about', 'skills', 'contact'].forEach(id => {

            so.observe(document.getElementById(id));

        });

    }


    // Image Preview / Lightbox
    const lb = document.querySelector('.lb');

    if (lb) {

        const body = lb.querySelector('.lb-body');
        const ttl = lb.querySelector('h3');

        const close = () => lb.classList.remove('open');


        // Open Image Preview
        document.querySelectorAll('.g-item').forEach(f => {

            f.tabIndex = 0;

            const open = () => {

                body.innerHTML = f.querySelector('.ph, img').outerHTML;

                ttl.textContent = f.dataset.title;

                lb.classList.add('open');

                lb.querySelector('button').focus();

            };


            // Open Preview on Click
            f.addEventListener('click', e => {

                if (e.target.tagName !== 'A') {
                    open();
                }

            });


            // Open Preview Using Enter Key
            f.addEventListener('keydown', e => {

                if (e.key === 'Enter') {
                    open();
                }

            });

        });


        // Close Preview on Background or Button Click
        lb.addEventListener('click', e => {

            if (e.target === lb || e.target.tagName === 'BUTTON') {
                close();
            }

        });


        // Close Preview Using Escape Key
        document.addEventListener('keydown', e => {

            if (e.key === 'Escape') {
                close();
            }

        });

    }

})();

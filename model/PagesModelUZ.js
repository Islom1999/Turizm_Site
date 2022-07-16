const mongoose = require('mongoose')

const PagesModelUZ = new mongoose.Schema({
    homePage: {
        slider: [
            {
                img: {type: 'string', required: true },
                title: {type: 'string', required: true },
                descr: {type: 'string', required: true },
            }
        ], 
        section: {
            descr: {type: 'string', required: true },
            statis: [
                {
                    num: {type: 'number'},
                    content: {type: 'string'}
                }
            ],
            video: {
                src: {type: 'string', required: true},
                err: {type: 'string', required: true}
            },
            places: {
                title: {type: 'string', required: true},
                descr: {type: 'string', required: true}
            },
            hotels: {
                title: {type: 'string', required: true},
                descr: {type: 'string', required: true}
            }
        },
        btns: {
            load: {type: 'string', required: true},
            more: {type: 'string', required: true},
            learn: {type: 'string', required: true},
        }
    },
    navbar: {
        logoSrc: {type: 'string', required: true},
        links: {
            home: {type: 'string', required: true},
            about: {type: 'string', required: true},
            services: {type: 'string', required: true},
            contact: {type: 'string', required: true}
        },
        reg: {
            login: {type: 'string', required: true}
        }
    },
    footer: {
        content: {
            title: {type: 'string', required: true},
            descr: {type: 'string', required: true}
        },
        links: {
            title: {type: 'string', required: true},
            home: {type: 'string', required: true},
            about: {type: 'string', required: true},
            services: {type: 'string', required: true},
            contact: {type: 'string', required: true}
        },
        contact: {
            title: {type: 'string', required: true},
            location: {
                key: {type: 'string', required: true},
                value: {type: 'string', required: true},
            },
            phone: {
                key: {type: 'string', required: true},
                value: {type: 'string', required: true},
            },
            email: {
                key: {type: 'string', required: true},
                value: {type: 'string', required: true},
            },
        },
        network: {
            title: {type: 'string', required: true},
            facebook: {
                link: {type: 'string', required: true},
                content: {type: 'string', required: true},
            },
            instagram: {
                link: {type: 'string', required: true},
                content: {type: 'string', required: true},
            },
            telegram: {
                link: {type: 'string', required: true},
                content: {type: 'string', required: true},
            },
        },
        privacy: {
            leftOne:{type: 'string', required: true},
            leftTwo:{type: 'string', required: true},
            right:{type: 'string', required: true},
        }
    }
})

module.exports = mongoose.model('PagesUZ', PagesModelUZ)
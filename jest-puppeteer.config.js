module.exports = {
    launch: {
        headless:  false,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true
    }
}
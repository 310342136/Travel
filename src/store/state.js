let defaultCity = '玉林'
try {
    if (localStorage.city) {
        defaultCity=localStorage.city
    }
} catch (e) { }

export default {
    city:defaultCity || '玉林'
}
// <% tp.user.navigation(tp.file.title) %>

const day_in_milis = 24 * 60 * 60 * 1000;
const dn = ["вс","пн","вт","ср","чт","пт","сб"];
function e2d(d) {
    return new Date(d);
}
function e2title(e) {
    return e2d(e).toISOString().slice(0, 10);
}
function e2weekday(e) {
    return e2d(e).getDay();
}
function e2weekday_name(e) {
    return dn[e2weekday(e)];
}
function isWorkingDay(wd) {
    return wd >= 1 && wd <= 5;
}
function get_next_day(e, delta) {
    const next = e + delta;
    const wd = e2weekday(next);
    if (isWorkingDay(wd)) {
        return next;
    }
    return get_next_day(next, delta);
}
function link(e) {
    return `[[${e2title(e)}|${e2weekday_name(e)}]]`;
}
function navigation(title) {
    const e = Date.parse(title);
    if (isNaN(e)) {
        return `error: invalid title format, expecting YYYY-MM-DD, but was: ${title}`;
    }
    y = get_next_day(e, -day_in_milis);
    t = get_next_day(e, +day_in_milis);
    return `${link(y)} ${e2weekday_name(e)} ${link(t)}`;
}

console.log(navigation("2023-11-10"));
console.log(navigation("2023-11-06"));
console.log(navigation("some text"));

module.exports = navigation;
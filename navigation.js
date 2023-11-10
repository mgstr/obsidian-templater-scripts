// <% tp.user.navigation(tp.file.title) %>
// <% tp.user.navigation(tp.file.title, "ru") %>
// <% tp.user.navigation(tp.file.title, "est", {weekday:"long"}) %>

const day_in_milis = 24 * 60 * 60 * 1000;
function e2d(d) {
    return new Date(d);
}
function e2title(e) {
    return e2d(e).toISOString().slice(0, 10);
}
function e2weekday(e) {
    return e2d(e).getDay();
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
function navigation(title, locale, weekday={weekday:"short"}) {
    function e2weekday_name(e) {
        return e2d(e).toLocaleDateString(locale, weekday);
    }
    function link(e) {
        return `[[${e2title(e)}|${e2weekday_name(e)}]]`;
    }
    
    const e = Date.parse(title);
    if (isNaN(e)) {
        return `error: invalid title format, expecting YYYY-MM-DD, but was: ${title}`;
    }
    y = get_next_day(e, -day_in_milis);
    t = get_next_day(e, +day_in_milis);
    return `${link(y)} ${e2weekday_name(e)} ${link(t)}`;
}

module.exports = navigation;
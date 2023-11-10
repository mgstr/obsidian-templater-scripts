const e2d = (e) => new Date(e);
const e2title = (e) => e2d(e).toISOString().slice(0, 10);
const e2weekday = (e) => e2d(e).getDay();
const isWorkingDay = (wd) => wd >= 1 && wd <= 5;
function get_next_day(e, delta) {
    const next = e + delta;
    const wd = e2weekday(next);
    if (isWorkingDay(wd)) {
        return next;
    }
    return get_next_day(next, delta);
}
function navigation(title, locale, weekday={weekday:"short"}) {
    const e2weekday_name = (e) => e2d(e).toLocaleDateString(locale, weekday);
    const link = (e) => `[[${e2title(e)}|${e2weekday_name(e)}]]`;
    
    const e = Date.parse(title);
    if (isNaN(e)) {
        return `error: invalid title format, expecting YYYY-MM-DD, but was: ${title}`;
    }
    const day_in_milis = 24 * 60 * 60 * 1000;
    y = get_next_day(e, -day_in_milis);
    t = get_next_day(e, +day_in_milis);
    return `${link(y)} ${e2weekday_name(e)} ${link(t)}`;
}

module.exports = navigation;
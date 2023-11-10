const e2d = (e) => new Date(e);
const e2title = (e) => e2d(e).toISOString().slice(0, 10);
const e2weekday = (e) => e2d(e).getDay();
const isWorkingDay = (wd) => wd >= 1 && wd <= 5;
function getNextWorkingDay(e, delta) {
    const next = e + delta;
    if (isWorkingDay(e2weekday(next))) {
        return next;
    }
    return getNextWorkingDay(next, delta);
}
function navigation(title, locale, weekday={weekday:"short"}) {
    const e2weekdayName = (e) => e2d(e).toLocaleDateString(locale, weekday);
    const link = (e) => `[[${e2title(e)}|${e2weekdayName(e)}]]`;
    
    const e = Date.parse(title);
    if (isNaN(e)) {
        return `error: invalid title format, expecting YYYY-MM-DD, but was: ${title}`;
    }
    const milisecondsInDay = 24 * 60 * 60 * 1000;
    const y = getNextWorkingDay(e, -milisecondsInDay);
    const t = getNextWorkingDay(e, +milisecondsInDay);
    return `${link(y)} ${e2weekdayName(e)} ${link(t)}`;
}
module.exports = navigation;
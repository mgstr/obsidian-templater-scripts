# obsidian-templater-scripts

Scripts for Obsidian Templater plugin

## Navigation - create a links for previous and next working days

### using system default locale and short day naming format

```
<% tp.user.navigation(tp.file.title) %>
```

output: `[[2023-11-03|Fri]] Mon [[2023-11-07|Tue]]`

### using Russian locale

```
<% tp.user.navigation(tp.file.title, "ru") %>
```

output: `'[[2023-11-03|пт]] пн [[2023-11-07|вт]]'`

### using Estonian locale and long weekday names

```
<% tp.user.navigation(tp.file.title, "est", {weekday:"long"}) %>
```

output: `[[2023-11-03|reede]] esmaspäev [[2023-11-07|teisipäev]]`

### using Belorusian locale and long date format

```
<% tp.user.navigation(tp.file.title, "bel", {}) %>
```

output: `'[[2023-11-03|3.11.2023]] 6.11.2023 [[2023-11-07|7.11.2023]]'`

### in case the page title is not in the expected format

output: `error: invalid title format, expecting YYYY-MM-DD, but was: ...`

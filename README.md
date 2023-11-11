# obsidian-templater-scripts

Scripts for Obsidian Templater plugin

## Navigation - create a links for previous and next working days

|     |     |
| --- | --- |
| ```<% tp.user.navigation(tp.file.title) %>``` | [[2023-11-03\|Fri]] Mon [[2023-11-07\|Tue]] |
| ```<% tp.user.navigation(tp.file.title, "ru") %>``` | [[2023-11-09\|чт]] пт [[2023-11-13\|пн]] |
| ```<% tp.user.navigation(tp.file.title, "est", {weekday:"long"}) %>``` | [[2023-11-03\|reede]] esmaspäev [[2023-11-07\|teisipäev]] |

### using system default locale and short day naming format

```
<% tp.user.navigation(tp.file.title) %>
```

```
[[2023-11-03|Fri]] Mon [[2023-11-07|Tue]]
```

### using Russian locale

```
<% tp.user.navigation(tp.file.title, "ru") %>
```

```
[[2023-11-09|чт]] пт [[2023-11-13|пн]]
```

### using Estonian locale and long weekday names

```
<% tp.user.navigation(tp.file.title, "est", {weekday:"long"}) %>
```

```
[[2023-11-03|reede]] esmaspäev [[2023-11-07|teisipäev]]
```

### in case the page title is not in the expected format

```
error: invalid title format, expecting YYYY-MM-DD, but was: ...
```

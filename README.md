# obsidian-templater-scripts
Scripts for Obsidian Templater plugin 

```Templater code
<% tp.user.navigation(tp.file.title) %>
<% tp.user.navigation(tp.file.title, "ru") %>
<% tp.user.navigation(tp.file.title, "est", {weekday:"long"}) %>
```

```javascript
console.log(navigation("2023-11-06"));                          // '[[2023-11-03|Fri]] Mon [[2023-11-07|Tue]]'
console.log(navigation("2023-11-10", "ru"));                    // '[[2023-11-09|чт]] пт [[2023-11-13|пн]]'
console.log(navigation("2023-11-06", "est", {weekday:"long"})); // '[[2023-11-03|reede]] esmaspäev [[2023-11-07|teisipäev]]'
console.log(navigation("some text"));                           // 'error: invalid title format, expecting YYYY-MM-DD, but was: some text'
```
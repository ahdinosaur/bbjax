# bbjax

alternative Backbone.ajax based on [nets](http://npmjs.org/package/nets).

## install

```
npm i --save bbjax
```

## use

```
Backbone.ajax = require('bbjax')
```

```
people.fetch({
  headers: ["x-my-header"],
  success: function (data, textStatus, xhr) {
    console.log(data, textStatus, xhr);
  },
  error: function (xhr, textStatus, errorThrown) {
    console.log(xhr, textStatus, errorThrown);
  },
});
```
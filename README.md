stretch
=======

Stretch out the contents of an array like a rubber band

Install
-------

    npm install stretch

Example
-------

```
> var stretch = require('./')

> stretch(['cat', 'dog'], 4)
[ 'cat', 'cat', 'dog', 'dog' ]
> stretch(['cat', 'dog'], 8)
[ 'cat', 'cat', 'cat', 'cat', 'dog', 'dog', 'dog', 'dog' ]

> stretch([0,1,0], 6)
[ 0, 0, 1, 1, 0, 0 ]
> stretch([0,1,0], 9)
[ 0, 0, 0, 1, 1, 1, 0, 0, 0 ]
> stretch([0,1,0], 12)
[ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ]

> stretch([0,1,0], 5)
[ 0, 0, 1, 1, 0 ]
```

License
-------

MIT

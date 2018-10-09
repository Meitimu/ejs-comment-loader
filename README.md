# ejs-comment-loader
Use ejs in js file
在 js 文件中使用 ejs 模版

## Installation 安装

`npm install ejs-comment-loader`

## Usage 使用

example.js
``` js
// ...
/* ejs
<% files.forEach((f) => { %>
import '<%= f %>'
<% }) %>
*/
// ...
```

webpack
``` js
module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/, 
                loader: 'ejs-comment-loader', 
                query: { 
                    data: {
                      files: ['1.js', '2.js']
                    }
                }
            },
        ]
    }
};
```

result
``` js
import '1.js'
import '2.js'
```

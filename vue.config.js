/**
 * @description: vue配置文件
 * @since: 2019-11-24 18:11:22
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-11-24 18:15:30
 */

module.exports = {
    css: {
        // 向 CSS 相关的 loader 传递选项。
        loaderOptions: {
            scss: {
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                // 在sass-loader v8 中,这个选项名是 prependData
                prependData: `@import "@/assets/sass/base_core.scss";`
            }
        }
    }
};

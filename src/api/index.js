/**
 * @description: 将API封装进vue中
 * @since: 2019-11-24 18:19:50
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-11-24 18:22:01
 */

import Vue from "vue";
import _api from "./api.export";

// 将API封装成Vue插件
Plugin.install = function (Vue, options) {
    Vue.api = _api;
    window.api = _api;
    Object.defineProperties(Vue.prototype, {
        api: {
            get() {
                return _api;
            }
        },
        $api: {
            get() {
                return _api;
            }
        }
    })
}

Vue.use(Plugin);

export default Plugin;
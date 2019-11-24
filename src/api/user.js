/**
 * @description: 封装 user API
 * @since: 2019-11-24 18:26:51
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-11-24 18:30:57
 */

import axios from "@/plugins/axios";

const user = {
    login({ username, password }) {
        return axios.post("/login", {
            username,
            password
        });
    }
};

export default user;
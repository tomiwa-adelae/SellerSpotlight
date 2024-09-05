"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
exports.formUrlQuery = formUrlQuery;
exports.removeKeysFromQuery = removeKeysFromQuery;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
const query_string_1 = __importDefault(require("query-string"));
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
function formUrlQuery({ params, key, value }) {
    const currentUrl = query_string_1.default.parse(params);
    currentUrl[key] = value;
    return query_string_1.default.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
    }, { skipNull: true });
}
function removeKeysFromQuery({ params, keysToRemove, }) {
    const currentUrl = query_string_1.default.parse(params);
    keysToRemove.forEach((key) => {
        delete currentUrl[key];
    });
    return query_string_1.default.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
    }, {
        skipNull: true,
    });
}

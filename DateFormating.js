/**
 *  'Do' for ordinal day of the months convert
 * numbers to string like 1st, 2nd ...
 *
 *
 */

const ordinal = require("ordinal");
const { days, months } = require("date-names");

// const { formatDate } = require("./format-date");
// import moduleName from 'module';
import { formatDate } from "./format-date";
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

exports.formatDate = function (date, format) {
  return format.replace(/YYY|M(MMMM)?|Do?|dddd/g, (tag) => {
    if (tag === "YYYY") return date.getFullYear();
    if (tag === "M") return date.getMonths();
    if (tag === "MMMM") return months[date.getMonths()];
    if (tag === "D") return date.getDate();
    if (tag === "Do") return ordinal(date.getDate());
    if (tag === "dddd") return days[date.getDay()];
  });
};

console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

/**
 * Note The interface of ordinal is a single
 * function, whereas date-names exports an object
 * containing multiple things—days and months are
 *  arrays of names. Destructuring
 *  is very convenient when creating
 * bindings for imported interfaces.
 *  */

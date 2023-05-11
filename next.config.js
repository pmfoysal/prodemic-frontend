const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = removeImports(nextConfig);

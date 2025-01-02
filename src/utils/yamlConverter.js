function convertToYaml(node) {
    const yaml = require('js-yaml');
    return yaml.dump(node);
}

module.exports = convertToYaml;
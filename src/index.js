const fs = require('fs');
const path = require('path');
const { convertToYaml } = require('./utils/yamlConverter');

const inputFilePath = path.join(__dirname, 'input.json'); // 假设输入文件为 input.json
const outputFilePath = path.join(__dirname, 'output.yaml');

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('读取输入文件时出错:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        const yamlData = convertToYaml(jsonData);

        fs.writeFile(outputFilePath, yamlData, (err) => {
            if (err) {
                console.error('写入输出文件时出错:', err);
                return;
            }
            console.log('YAML 文件已成功生成:', outputFilePath);
        });
    } catch (err) {
        console.error('解析 JSON 数据时出错:', err);
    }
});
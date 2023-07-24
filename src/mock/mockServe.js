import Mock from 'mockjs';
import categoryBywine from './categoryBywine.json';
import technology from './technology.json';
import wine from './wine.json';
import icon from './icon.json';
Mock.mock('/mock/wineWater',{code:200,data:categoryBywine});
Mock.mock('/mock/technology',{code:200,data:technology});
Mock.mock('/mock/wine',{code:200,data:wine});
Mock.mock('/mock/icon',{code:200,data:icon});
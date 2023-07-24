import mockRequest from "./mockAjax";
import request from "./request";
// export const reqWineWater = () => {return mockRequest.get("/wineWater")};
// export const reqTechnology = () => {return mockRequest.get("/technology")};
// export const reqWine= () => {return mockRequest.get("/wine")};
// export const reqIcon = () => {return mockRequest.get("/icon")};
export const reqWineWater = () => {return request.get("/categoryBywine.json")};
export const reqTechnology = () => {return request.get("/technology.json")};
export const reqWine= () => {return request.get("/wine.json")};
export const reqIcon = () => {return request.get("/icon.json")};
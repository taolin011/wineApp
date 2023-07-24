import mockRequest from "./mockAjax";
export const reqWineWater = () => {return mockRequest.get("/wineWater")};
export const reqTechnology = () => {return mockRequest.get("/technology")};
export const reqWine= () => {return mockRequest.get("/wine")};
export const reqIcon = () => {return mockRequest.get("/icon")};
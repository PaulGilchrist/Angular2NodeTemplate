"use strict";var sort_objects_pipe_1=require("./sort-objects.pipe");describe("SortObjectsPipe",function(){it("Object array sorted in ascending order based on name property",function(){var e=new sort_objects_pipe_1.SortObjectsPipe,t=[{name:"Gary",job:"Data"},{name:"Paul",job:"Enterprise"},{name:"John",job:"Infrastructure"},{name:"Rick",job:"Network"},{name:"Brent",job:"Solutions"},{name:"Jamie",job:"Systems"}],r=e.transform(t,"name",!1);expect(r[0].name).toEqual("Brent")}),it("Object array sorted in decending order based on name property",function(){var e=new sort_objects_pipe_1.SortObjectsPipe,t=[{name:"Gary",job:"Data"},{name:"Paul",job:"Enterprise"},{name:"John",job:"Infrastructure"},{name:"Rick",job:"Network"},{name:"Brent",job:"Solutions"},{name:"Jamie",job:"Systems"}],r=e.transform(t,"name",!0);expect(r[0].name).toEqual("Rick")})});
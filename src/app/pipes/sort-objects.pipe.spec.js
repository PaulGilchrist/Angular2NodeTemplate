"use strict";
var sort_objects_pipe_1 = require('./sort-objects.pipe');
describe('SortObjectsPipe', function () {
    it('Object array sorted in ascending order based on name property', function () {
        var sortObjectsPipe = new sort_objects_pipe_1.SortObjectsPipe();
        var inputObjectArray = [
            { name: 'Gary', job: 'Data' },
            { name: 'Paul', job: 'Enterprise' },
            { name: 'John', job: 'Infrastructure' },
            { name: 'Rick', job: 'Network' },
            { name: 'Brent', job: 'Solutions' },
            { name: 'Jamie', job: 'Systems' }
        ];
        var outputObjectArray = sortObjectsPipe.transform(inputObjectArray, 'name', false);
        expect(outputObjectArray[0].name).toEqual('Brent');
    });
    it('Object array sorted in decending order based on name property', function () {
        var sortObjectsPipe = new sort_objects_pipe_1.SortObjectsPipe();
        var inputObjectArray = [
            { name: 'Gary', job: 'Data' },
            { name: 'Paul', job: 'Enterprise' },
            { name: 'John', job: 'Infrastructure' },
            { name: 'Rick', job: 'Network' },
            { name: 'Brent', job: 'Solutions' },
            { name: 'Jamie', job: 'Systems' }
        ];
        var outputObjectArray = sortObjectsPipe.transform(inputObjectArray, 'name', true);
        expect(outputObjectArray[0].name).toEqual('Rick');
    });
    //Add test for number sorting
    //Add test for date sorting
});
//# sourceMappingURL=sort-objects.pipe.spec.js.map

const assert=require('chai').assert;
const postuser=require("../mockup_functions/post_new_user-mock")
const perEV=require("../mockup_functions/perEV-mock")
const perPoint=require("../mockup_functions/perPoint-mock")
const perProvider=require("../mockup_functions/perProvider-mock")
const perStation=require("../mockup_functions/perStation-mock")
const getuser=require("../mockup_functions/getUser-mock")



describe('POST user',  function (){
    it('it should post a new user',   function (){
        const username = 'abcde'
        const password = '1234'
        const result=postuser.post(username,password);
        assert.equal(result,1)
            });
});

describe('Get User',  function (){
    it('it should get a user',function (){
        const username='abc'
        const result=getuser.get(username);
        assert.equal(result,1)
    });
});

describe('perEV',  function (){
    it('it should find history by car_id',function (){
        const car_id = '10'
        const date_from = '2020-12-18'
        const date_to = '2020-12-23'
        const result=perEV.perEV(car_id,date_from,date_to);
        assert.equal(result,1)
    });
});

describe('perPoint',  function (){
    it('it should find history by point_id',function (){
        const point_id = '4'
        const date_from = '2020-12-19'
        const date_to = '2020-12-22'
        const result=perPoint.perPoint(point_id,date_from,date_to);
        assert.equal(result,1)
    });
});

describe('perProvider',  function (){
    it('it should find history by provider_id',function (){
        const provider_id = '3'
        const date_from = '2020-09-12'
        const date_to = '2020-12-24'
        const result=perProvider.perProvider(provider_id,date_from,date_to);
        assert.equal(result,1)
    });
});

describe('perStation',  function (){
    it('it should find history by station_id',function (){
        const station_id = '4'
        const date_from = '2020-10-12'
        const date_to = '2020-12-23'
        const result=perStation.perStation(station_id,date_from,date_to);
        assert.equal(result,1)
    });
});





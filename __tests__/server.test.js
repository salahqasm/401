'use strict';

const server=require("../server.js");

const supertest=require("supertest");

const request=supertest(server.app)


describe("Testing server.js",()=>{
    it("testing /",async()=>{
        const response=await request.get('/');
        
        expect(response.text).toEqual('home route');
    })
    it("testing /data",async()=>{
        const response=await request.get('/data');
        expect(typeof(response.body)).toEqual('object');
    })
})
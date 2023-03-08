const { expect } = require('chai')
const { json } = require('express')
const sinon = require('sinon')
const { response } = require('../../src/app')
const { listAlbums } = require('../../src/controllers/album')

describe('listAlbums', () => {
    it('returns a 200 status code', () => {
        const request = {}
        const response = {
            status: sinon.stub().returns(this),
            json: () => {}
        }

        listAlbums(request, response)

        expect(response.status.calledWith(200)).to.be.true
    })

    it('returns a list of albums', () => {
        const request = {}
        const response = {
            status: sinon.stub().returns(this),
            json: () => {}
        }

        listAlbums(request, response)

        expect(response.status.calledWith(200)).to.be.true
    })
})
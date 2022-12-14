const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Subscriber = require('../models/subscriber')
const Student = require('../models/student')
// Getting All
router.get('/', async (req, res) => {
   try {
       const subscriber = await Subscriber.find()
       res.json(subscriber)
   } catch (err) {
       res.status(500).json({message: err.message})
   }
})
//getting one
router.get('/:id',getSubscriber, (req, res) => {
   
    res.send(res.subscriber.name)

})
//creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json(err.message)
    }
})

//updating one 
router.patch('/:id',getSubscriber, async (req, res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updateSubscribr = await res.subscriber.save()
        res.json(updateSubscribr);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
//deleting one
router.delete('/:id',getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message: "Deleted Subscriber"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getSubscriber(req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(400).json({message:"Cannot find subscriber"})
        }

    } catch (err) {
        return res.status(500).json({message:err.message})
    }

    res.subscriber = subscriber
    next()
}
module.exports = router
import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Tabs, Tab} from "@nextui-org/react";
import CardComp from './CardComp';
import PriceCard from './PriceCard';



export default function Pricing() {

    const MonthlyCards = [
        {
            tagline: "Free",
            tagcover: "So you can see how incredible our tool is. ",
            price: 0,
            pricecover: "Free for ever",
            buttoncover: "No credit card needed",
            color: "#f1f2f4",
            listhead: "What's included:",
            list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature"
            ]
        },
        {
            tagline: "Starter",
            tagcover: "So you can see how incredible our tool is. ",
            price:19,
            pricecover: "Billed monthly",
            buttoncover: "7 days free trial no credit card needed",
            color: "#FDDED6",
            listhead: "What's included:",
             list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature"
            ]
            
        },       
        {
            tagline: "Pro",
            tagcover: "So you can see how incredible our tool is. ",
            price: 49,
            pricecover: "Billed monthly",
            buttoncover: "7 days free trial no credit card needed",
            color: "#DDF4E4",
            listhead: "What's included:",
             list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature",
                "A premium feature",
                "You need this feature"
            ]
            
        },
    ];

    const AnnualCards = [
         {
            tagline: "Free",
            tagcover: "So you can see how incredible our tool is. ",
            price: 0,
            pricecover: "Free for ever",
            buttoncover: "No credit card needed",
            color: "#f1f2f4",
            listhead: "What's included:",
            list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature"
            ]
        },
        {
            tagline: "Starter",
            tagcover: "So you can see how incredible our tool is. ",
            price:15,
            pricecover: "Billed $180 yearly",
            buttoncover: "7 days free trial no credit card needed",
            color: "#FDDED6",
            listhead: "What's included:",
             list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature"
            ]
            
        },       
        {
            tagline: "Pro",
            tagcover: "So you can see how incredible our tool is. ",
            price: 45,
            pricecover: "Billed $180 yearly",
            buttoncover: "7 days free trial no credit card needed",
            color: "#DDF4E4",
            listhead: "What's included:",
             list: [
                "A cool feature",
                "A basic feature",
                "A top feature with limitations",
                "An incredible feature so useful",
                "A top feature",
                "A premium feature",
                "You need this feature"
            ]
            
        },
    ]
  return (
    <div>
        <div className=' flex flex-col space-y-0 items-center justify-center overflow-hidden text-center z-0'>
        <div className='text-center w-[480px] md:w-[900px] lg:w-[1200px] z-20'>
            <motion.div
            initial={{opacity:0, y:140}}
            transition={{duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='mb-14'>
                <div className='flex flex-col items-center mt-40'>
                    <Tag tagline='Pricing and plans 💰' color='#f1f2f4' />
                </div>
                <h1 className='sm:text-2xl  font-extrabold pb-6' style={{fontSize:"58px", lineHeight:"44px"}}>
                    Find the best plan for your needs
                </h1>
            </motion.div>
            <div>
                 <Tabs aria-label="Options">
                    <Tab key="monthly" title="Monthly">
                        <div  className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 p-4 m-4'>

                        {
                            MonthlyCards.map((card, index) => (
                                <PriceCard key={index} {...card} />
                                ))
                            }
                        </div>

                    </Tab>
                    <Tab key="annually" title="Anually">
                        <div  className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 p-4 m-4'>

                        {
                            AnnualCards.map((card, index) => (
                                <PriceCard key={index} {...card} />
                                ))
                        }
                        </div>

                    </Tab>
                 </Tabs>
            </div>
            
            
            
        </div>
        </div>
    </div>
  )
}

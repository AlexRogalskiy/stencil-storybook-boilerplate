import markdown from"./readme.md";import{attachArgs,attachSlots,eventsFromDocs,propsFromDocs,slotsFromDocs}from"../../utils/stories.utils";const componentName="my-component",props=propsFromDocs(componentName),slots=slotsFromDocs(componentName),events=eventsFromDocs(componentName);console.log(Object.assign({},props));export default{title:"Components/My Component",argTypes:Object.assign(Object.assign(Object.assign({},props),slots),events),parameters:{notes:{markdown:markdown}}};const Template=args=>{const component=document.createElement(componentName);return attachArgs(args,events,component),attachSlots(args,slots,component),component};export const Default=Template.bind({});
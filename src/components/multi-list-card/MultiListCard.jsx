import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './multi.css'

const MultiListCard = () => {


    const cardDetaisl = [
        {
            title : "API & Backend Development Frameworks",
            list :[
                {
                    list1: "Web API Frameworks",
                    content :"Spring, Django, Flask, Express, ASP .NET, Laravel"
                },
                {
                    list1: "Programming Languages",
                    content :"Java, .NET, Python, Ruby, Php"
                },
                {
                    list1: "Multi-threaded High-Scalable System",
                    content :"Quartz Schedulers, Cronless, Chronicle, Lambda"
                },
                {
                    list1: "Cloud Infrastructure",
                    content :"Google Cloud, AWS, Azure, Heroku"
                },
                {
                    list1: "Open API Documentation",
                    content :"Swagger, Postman, Open API"
                },

            ]

        },
        {
            title : "Microservices & Kubernates",
            list :[
                {
                    list1: "Orchestration & Container",
                    content :"Kubernetes & Docker"
                },
                {
                    list1: "Message Bus",
                    content :"Kafka, RabbitMQ, Kinesis, SNS, SQS, Google Pub/Sub"
                },
                {
                    list1: "Logging Monitoring",
                    content :"Elasticsearch, Kibana, Prometheus"
                },
                {
                    list1: "Build Tools & Pipelines",
                    content :"Helm, Istio, Skaffold, Jenkin X, Cloud Build"
                },
                {
                    list1: "Technologies",
                    content :"Spring Boot, Django, Flask, Wildfly Swarm"
                },


            ]

        },

    ]
   



  return (
    <>
    <Row>

 
    {
        cardDetaisl.map((item, index)=>{

            return(

                <Col className='card_margin' lg="6">  

            <Card className='multi_list_card'>
         
                <Card.Title className='multi_list_card_content_title'>{item.title}</Card.Title>
                
            
                <div className='multi_list_card_content'>
                <ul>
                    
                    {
                        item.list.map((newitem, index)=>{

                          

                            return(
                                <li>
                                    {newitem.list1}
                      
                       
                                <p className='list_subitem'>{newitem.content}</p>
                               
                               </li>

                            )

                        })
                    }
                    
                    
                    
                    </ul>
            
                   
                  
            
                </div>
            
            
                
            
            
            
            
            </Card>
            </Col>
            )
           
        })
    }


  


      


    </Row>

  

 

    



    </>

  


  )
}

export default MultiListCard
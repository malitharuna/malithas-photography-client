import React from 'react';

const Blog = () => {
    return (
        <div className='p-20 mx-auto'>
            
            <div>
            <h1 className='text-xl font-bold'>Q.1.  Difference Between SQL and NoSQL?</h1>
            <p>Ans: <strong>SQL </strong>: SQL databases are primarily called  RDBMS or
                      Relational Databases. Traditional RDBMS uses SQL syntax and queries 
                      to analyze and get the data for further insights.
                      They are used for OLAP systems. Structured query language (SQL)
 
            </p>
            <p> <strong>NoSQL</strong> :NoSQL databases are primarily called as 
                      Non-relational or distributed database, Traditional RDBMS uses SQL syntax and queries to 
                      analyze and get the data for further insights. 
                      They are used for OLAP systems.No declarative query language
                      </p>

            <h1 className='text-xl font-bold'>Q.2.Difference between Node.JS and Javascript? </h1>
            <p>Ans: <strong>Node JS:</strong>  <br></br> NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.</p>
              <p>
                <strong>JavaScript:</strong> <br/>Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
              </p>

              <h1 className='text-xl font-bold'>Q.3. What is JWT, and how does it work?</h1>
              <p>Asn:  <br></br>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.

              How It works?
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.{" "}
              <br />
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.{" "}
              <br />
              Once decoded, you will get two JSON strings: <br />
              The header and the payload. <br />
              The signature. <br />
              The JOSE (JSON Object Signing and Encryption) header contains the
              type of token — JWT in this case — and the signing algorithm.{" "} <br />
              The payload contains the claims. This is displayed as a JSON
              string, usually containing no more than a dozen fields to keep the
              JWT compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting.{" "} <br />
              There are no mandatory claims for a JWT, but overlaying standards
              may make claims mandatory. For example, when using JWT as bearer
              access token under OAuth2.0, iss, sub, aud, and exp must be
              present. some are more common than others.{" "}

            
              </p>
              <h1 className='text-xl font-bold'>Q.4. How does NodeJS handle multiple requests at the same time?</h1>
              <p>Ans: <br />
              Given a NodeJS application, since Node is single threaded, say if
              processing involves a Promise.all that takes 8 seconds, does this
              mean that the client request that comes after this request would
              need to wait for eight seconds? No. NodeJS event loop is single
              threaded. The entire server architecture for NodeJS is not single
              threaded. <br />
              NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue. <br />

              The listener(the event loop) processes the request and if it is
              able to process the request without needing any blocking IO
              operations, then the event loop would itself process the request
              and sends the response back to the client by itself. If the
              current request uses blocking IO operations, the event loop sees
              whether there are threads available in the thread pool, picks up
              one thread from the thread pool and assigns the particular request
              to the picked thread. That thread does the blocking IO operations
              and sends the response back to the event loop and once the
              response gets to the event loop, the event loop sends the response
              back to the client.
              
              </p>
            </div>

        </div>
    );
};

export default Blog;
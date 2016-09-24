/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 5/6/14
 * Time: 10:30 AM
 * To change this template use File | Settings | File Templates.
 */





app.directive('master_page',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:'<div>hello</div>'

    }
}])

app.directive('master_page1',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div> '+
                '<div>'+
                    '<h1>Welcome to Events Company</h1>'+
                    '<div> <strong>Lorem ipsum dolor sit amet,</strong> consectetuer adipiscing elit. Duis cursus tortor. Nunc consectetuer diam ac odio. Pellentesque vel mauris sit amet urna malesuada ornare. Curabitur venenatis est eget arcu. Donec vestibulum. Proin rutrum. Morbi commodo fringilla orci. Ut vel tortor. In ut velit. Vivamus hendrerit aliquam quam. Curabitur placerat eros vitae libero. Fusce sagittis commodo purus. Cras orci. Quisque at justo. Quisque ullamcorper feugiat ligula. Quisque vulputate. <br />'+
                        '<br />                    Etiam eu lorem ac odio lacinia euismod. Duis tincidunt. In urna. <strong>Vestibulum convallis</strong> metus eget orci posuere bibendum. Quisque sit amet augue. Ut eros. Curabitur tortor dui, consequat in, congue ac, tincidunt a, lacus. Morbi diam. </div>'+
                '</div>'+
            '<div class="clear"></div>'+
                '<div class="latestprojectzone">'+
                    '<h1>Latest Projects</h1>'+
                    '<!--<div class="projectgallery" id="content-slider" style="height:113px;width:400px;overflow: hidden">'+
                        '<div id="slider">'+
                          '<div id="mask">'+
                            '<div class="projectimg" id="first" class="firstanimation"><img src="images/project1.jpg" alt="" border="0" /></div>'+
                            '<div class="projectimg" id="second" class="secondanimation"><img src="images/project2.jpg" alt="" border="0" /></div>'+
                            '<div class="projectimg" id="third" class="thirdanimation"><img src="images/project3.jpg" alt="" border="0" /></div>'+
                            '<div class="projectimg" id="fourth" class="fourthanimation"><img src="images/project4.jpg" alt="" border="0" /></div>'+
                          '</div>'+
                        '</div>'+
                    '</div>-->'+
                    '<div class="container">'+
                        '<div id="content-slider">'+
                            '<div id="slider">  <!-- Slider container -->'+
                                '<div id="mask">  <!-- Mask -->'+

                                    '<ul>'+
                                        '<li id="first" class="firstanimation" style="justify-content: center">  <!-- ID for tooltip and class for animation -->'+
                                            '<img src="images/project1.jpg" />'+
                                            '<div><span>Bridge Construction</span></div>'+
                                        '</li>'+

                                        '<li id="second" class="secondanimation">'+
                                            '<img src="images/project2.jpg" />'+
                                            '<div><span>Marine Construction</span></div>'+
                                        '</li>'+

                                        '<li id="third" class="thirdanimation">'+
                                            '<img src="images/project3.jpg" />'+
                                            '<div><span>Office Construction</span></div>'+
                                        '</li>'+

                                        '<li id="fourth" class="fourthanimation">'+
                                            '<img src="images/project4.jpg" />'+
                                            '<div><span>Building Construction</span></div>'+
                                        '</li>'+
                                    '</ul>'+

                                '</div>  <!-- End Mask -->'+
                                '<div class="progress-bar"></div>  <!-- Progress Bar -->'+
                            '</div>  <!-- End Slider Container -->'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            ' </div>'
    }
}])


app.directive('about_us',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+
                '<div>'+
                    '<h1>Company Information</h1>'+
                '</div>'+
            '<div class="clear"></div>'+
                '<div style="padding-bottom:10px;">'+
                    '<div><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. </strong><br />'+
                        '<br />'+
                        '<img src="images/photo-about.jpg" alt="" class="aboutus-img" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisqueeleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.<br />'+
                        '<br />'+
                    '</div>'+
                    '<div class="clear"></div>'+
                    '<div>'+
                        '<h3>Our Values</h3>'+
                        '<div>Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis.</div>'+
                    '</div>'+
                    '<div class="clear"></div>'+
                    '<div class="aboutcolumnzone">'+
                        '<div class="aboutcolumn1">'+
                            '<div>'+
                                '<h3>Customer Service</h3>'+
                                '<img src="images/ico-med-1.png" alt="" class="abouticon" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius,<div class="readmore"><a href="http://all-free-download.com/free-website-templates/">Read More...</a></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="aboutcolumn2">'+
                            '<div>'+
                                '<h3>Award Winning</h3>'+
                                '<img src="images/ico-med-2.png" alt="" class="abouticon" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius,<div class="readmore"><a href="http://all-free-download.com/free-website-templates/">Read More...</a></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                        '<div class="aboutcolumn1">'+
                            '<div>'+
                                '<h3>Global Reach</h3>'+
                                '<img src="images/ico-med-3.png" alt="" class="abouticon" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius,<div class="readmore"><a href="http://all-free-download.com/free-website-templates/">Read More...</a></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="aboutcolumn2">'+
                            '<div>'+
                                '<h3>Availability</h3>'+
                                '<img src="images/ico-med-4.png" alt="" class="abouticon" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius,<div class="readmore"><a href="http://all-free-download.com/free-website-templates/">Read More...</a></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                    '</div>'+
                    '<div>'+
                        '<h3>Our Commitment</h3>'+
                        '<div> Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. </div>'+
                    '</div>'+
                '</div>'+
            ' </div>'
    }
}])

app.directive('projects',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+

                    '<div>'+
                        '<h1>Our<span class="redheading"> Projects</span></h1>'+
                    '</div>'+
                '<div class="clear"></div>'+
                    '<div style="padding-bottom:10px;">'+
                        '<div class="ourprojectrow">'+
                            '<h4>Project One</h4>'+
                            '<div> <img src="images/projectimg1.jpg" alt="" width="210" height="139" class="project-img" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.<div class="clear"></div>'+
                            '</div>'+
                            '<br />'+
                            '<div style="font-weight:bold;"><img src="images/arrow.png" alt="" width="16" height="16" border="0"  /> <a href="http://all-free-download.com/free-website-templates/">View this project</a>'+
                                '<div class="clear"></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="ourprojectrow">'+
                            '<h4>Project Two </h4>'+
                            '<div> <img src="images/projectimg2.jpg" alt="" width="210" height="139" class="project-img" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.<div class="clear"></div>'+
                            '</div>'+
                            '<br />'+
                            '<div style="font-weight:bold;"><img src="images/arrow.png" alt="" width="16" height="16" border="0"  /> <a href="http://all-free-download.com/free-website-templates/">View this project</a>'+
                                '<div class="clear"></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="ourprojectrow">'+
                            '<h4>Project Three </h4>'+
                            '<div> <img src="images/projectimg3.jpg" alt="" width="210" height="139" class="project-img" /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.<div class="clear"></div>'+
                            '</div>'+
                            '<br />'+
                            '<div style="font-weight:bold;"><img src="images/arrow.png" alt="" width="16" height="16" border="0"  /> <a href="http://all-free-download.com/free-website-templates/">View this project</a>'+
                                '<div class="clear"></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
            ' </div>'
    }
}])

app.directive('services',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+
                '<div>'+
                    '<h1>Services for you</h1>'+
                '</div>'+
            '<div class="clear"></div>'+
                '<div style="padding-bottom:10px;">'+
                    '<div><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. </strong> <br />'+
                        '<br />         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.<br />'+
                        '<br />                   Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. </div>'+
                    '<div class="clear"></div>'+
                    '<div class="clear"></div>'+
                    '<div class="servicecolumnzone">'+
                        '<div class="servicecolumn1">'+
                            '<div>'+
                                '<h3> Service 1</h3>'+
                                '<img src="images/ico1.png" alt="" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="servicecolumn2">'+
                            '<div>'+
                                '<h3>Service 2</h3>'+
                                '<img src="images/ico2.png" alt="" width="65" height="65" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                        '<div class="servicecolumn1">'+
                            '<div>'+
                                '<h3>Service 3 </h3>'+
                                '<img src="images/ico3.png" alt="" width="65" height="65" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="servicecolumn2">'+
                            '<div>'+
                                '<h3>Service 4 </h3>'+
                                '<img src="images/ico4.png" alt="" width="65" height="65" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                        '<div class="servicecolumn1">'+
                           ' <div>'+
                                '<h3>Service 5 </h3>'+
                                '<img src="images/ico5.png" alt="" width="65" height="65" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="servicecolumn2">'+
                            '<div>'+
                                '<h3>Service 6 </h3>'+
                                '<img src="images/ico6.png" alt="" width="65" height="65" class="abouticon" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, </div>'+
                            '<div class="clear"></div>'+
                        '</div>'+
                        '<div class="clear"></div>'+
                    '</div>'+
                    '<div style="padding-top:10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.</div>'+
                '</div>'+
            ' </div>'
    }
}])


app.directive('support',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+

                    '<div>'+
                        '<h1>Support &amp; FAQ</h1>'+
                    '</div>'+
                '<div class="clear"></div>'+
                    '<div>'+
                        '<div class="ourprojectrow"> <img src="images/ico-support.png" width="144" height="117" align="right" alt="" />'+
                            '<div class="blog-posted-row">Posted on 04. Dec, 2015 by <a href="http://all-free-download.com/free-website-templates/">admin</a></div>'+
                            '<div>'+
                                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.</p>'+
                                '<p>Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis.</p>'+
                            '</div>'+
                            '<div><a href="http://all-free-download.com/free-website-templates/">Read Commnets</a></div>'+
                        '</div>'+
                        '<div class="ourprojectrow">'+
                            '<h4>Question One</h4>'+
                            '<div class="blog-posted-row">Posted on 04. Dec, 2015 by <a href="http://all-free-download.com/free-website-templates/">admin</a></div>'+
                            '<div>'+
                                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.</p>'+
                                '<p>Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis.</p>'+
                            '</div>'+
                            '<div><a href="http://all-free-download.com/free-website-templates/">Read Commnets</a></div>'+
                        '</div>'+
                        '<div class="ourprojectrow">'+
                            '<h4>Question Two</h4>'+
                            '<div class="blog-posted-row">Posted on 04. Dec, 2015 by <a href="http://all-free-download.com/free-website-templates/">admin</a></div>'+
                            '<div>'+
                                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.</p>'+
                                '<p>Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis.</p>'+
                            '</div>'+
                            '<div><a href="http://all-free-download.com/free-website-templates/">Read Commnets</a></div>'+
                        '</div>'+
                        '<div class="ourprojectrow">'+
                            '<h4>Question Three</h4>'+
                            '<div class="blog-posted-row">Posted on 04. Dec, 2015 by <a href="http://all-free-download.com/free-website-templates/">admin</a></div>'+
                            '<div>'+
                                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis.</p>'+
                                '<p>Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. Proin sed odio et ante adipiscing lobortis. Proin sed odio et ante adipiscing lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis.</p>'+
                            '</div>'+
                            '<div><a href="http://all-free-download.com/free-website-templates/">Read Commnets</a></div>'+
                        '</div>'+
                    '</div>'+
            ' </div>'
    }
}])

app.directive('privacy',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+

                '<div>'+
                    '<h1>Privacy Policy</h1>'+
                '</div>'+
            '<div class="clear"></div>'+
                '<div style="margin-bottom:10px;"><strong>What information do we collect?</strong><br />            We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. <br />               When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number, credit card information or social security number. You may, however, visit our site anonymously.<br />'+
                    '<br />'+
                    '<strong>What do we use your information for?</strong> <br />                Any of the information we collect from you may be used in one of the following ways: <br />'+
                    '<ul>'+
                        '<li>To personalize your experience<br />                        (your information helps us to better respond to your individual needs)</li>'+
                        '<li>To improve our website<br />                        (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>'+
                        '<li> To improve customer service<br />                        (your information helps us to more effectively respond to your customer service requests and support needs)</li>'+
                        '<li>To process transactions<br />                        We may share or sell information with third parties for marketing or other purposes without your consent.</li>'+
                        '<li>To administer a contest, promotion, survey or other site feature</li>'+
                        '<li>To send periodic emails<br />                        The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>'+
                    '</ul>              Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.<br />'+
                    '<br />'+
                    '<strong>How do we protect your information?</strong><br />                We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information. <br />                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to&iuml;&iquest;&frac12;keep the information confidential. <br />               After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be kept on file for more than 60 days.<br />'+
                    '<br />'+
                    '<strong>Do we use cookies?</strong> <br />'+
                    '<br />                Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information <br />                We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business. <br />                If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still place orders over the telephone or by contacting customer service.<br />'+
                    '<br />                    <strong>Do we disclose any information to outside parties?</strong><br />                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.<br /> <br />'+
                    '<strong>Third party links</strong><br />                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.<br />'+
                    '<br />'+
                    '<strong>California Online Privacy Protection Act Compliance</strong><br />                Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.<br />'+
                    '<br />'+
                    '<strong>Terms and Conditions</strong><br />                Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at <strong>http://www.MYCOMPANY.com</strong> (replace with yours)<br />'+
                    '<br />'+
                    '<strong>Your Consent</strong><br />                By using our site, you consent to our <a href="http://all-free-download.com/free-website-templates/">websites privacy policy</a>.<br />'+
                    '<br />'+
                    '<strong>Changes to our Privacy Policy</strong><br />                If we decide to change our privacy policy, we will post those changes on this page. <br />'+
                    '<br />'+
                    '<strong>Contacting Us</strong> <br />                If there are any questions regarding this privacy policy you may contact us using the information below. <br />'+
                    '<br />                MYCOMPANY.COM<br />                123 ADDRESS STREET<br />                MY CITY, MYSTATE 76543<br />                USA<br />                EMAIL@MYCOMPANY.COM<br />'+
                    '<hr noshade="noshade" size="1" color="#ccc" />'+
                    '<small>Privacy Policy prepared by <a href="http://www.dreamtemplate.com">DreamTemplate</a></small> </div>'+
            ' </div>'
    }
}])

app.directive('contact_us',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div> '+

                    '<div>'+
                        '<h1>Contact</h1>'+
                    '</div>'+
                '<div class="clear"></div>'+
                    '<div style="margin-bottom:10px;">'+
                        '<div> <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. </strong><br />'+
                            '<br />                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin sed odio et ante adipiscing lobortis. Quisque eleifend, arcu a dictum varius, risus neque venenatis arcu, a semper massa mi eget ipsum. </div>'+
                        '<div> <br />'+
                            '<h4>Contact Form:</h4>'+
                            '<form action="http://all-free-download.com/free-website-templates/" method="post">'+
                                '<table width="97%">'+
                                    '<tr>'+
                                        '<td width="145" align="left" valign="top" class="body" id="Company"><strong>Company:</strong></td>'+
                                        '<td width="280" align="left" valign="top"><input name="Company" type="text" size="40" /></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td align="left" valign="top" class="body" id="Contact"><strong>Full Name:</strong></td>'+
                                        '<td align="left" valign="top"><input name="Name" type="text" size="40" /></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td align="left" valign="top" class="body" id="Address"><strong>Address: </strong></td>'+
                                        '<td align="left" valign="top"><input name="Address" type="text" size="40" /></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td align="left" valign="top" class="body" id="Phone"><strong> Phone: </strong></td>'+
                                        '<td align="left" valign="top"><input name="Phone" type="text" size="40" /></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td align="left" valign="top" class="body" id="Email"><strong> Email: </strong></td>'+
                                        '<td align="left" valign="top"><input name="Email" type="text" size="40" /></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td align="left" valign="top" class="body" id="Comments"><strong> Questions / Comments: </strong></td>'+
                                        '<td align="left" valign="top"><textarea name="comments" cols="32" rows="6"></textarea></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td></td>'+
                                        '<td><input type="submit" name="submit" class="button" value="Send Now" /></td>'+
                                    '</tr>'+
                                '</table>'+
                            '</form>'+
                        '</div>'+
                        '<div> <br />'+
                            '<h4>Contact Information: </h4>'+
                            '<img src="images/photo-contact.jpg" alt="" width="196" height="130" class="project-img" />'+
                            '<p>100 Lorem Ipsum Dolor Sit<br />                            88-99 Sit Amet, Lorem<br />                            USA</p>'+
                            '<p> <span><img src="images/ico-phone.png" alt="" width="20" height="16" hspace="2"  /> Phone:</span> (888) 123 456 789<br />'+
                                '<span><img src="images/ico-fax.png" alt="" width="20" height="16" hspace="2"  /> Fax:</span> (888) 987 654 321<br />'+
                                '<span><img src="images/ico-website.png" alt="" width="20" height="16" hspace="2"  /> Website:</span> <a href="http://all-free-download.com/free-website-templates/">www.mycompany.com</a><br />'+
                                '<span><img src="images/ico-email.png" alt="" width="20" height="16" hspace="2"  /> Email:</span> <a href="http://all-free-download.com/free-website-templates/">info@mycompany.com</a><br />'+
                                '<span><img src="images/ico-twitter.png" alt="" width="20" height="16" hspace="3"  /> <a href="http://all-free-download.com/free-website-templates/">Follow</a> on Twitter</span><br />'+
                            '</p>'+
                        '</div>'+
                    '</div>'+
            ' </div>'
    }
}])


app.directive('find',[function($scope)
{
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box"> '+
           ' <h2>  Find the record in database <br> </h2>'+
            'Name:   <select ng-options="value.name for value in a" ng-model="selectedName" required >'+

               ' <option value="">-- choose Name--</option>'+

           ' </select>  <br>'+

           ' Id:       <select ng-options="value.id for value in a" ng-model="selectedName" required >'+
                   ' <br>'+
                       ' <option value="">-- choose Id--</option>'+

                    '</select>'+
               ' </div>'
    }
}])

app.directive('insert',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box">'+
           ' <h2>Insert User <br> </h2>' +

       'Name:    <input type="text" ng-model="text1">  <br>'+
           ' Email:    <input type="text" ng-model="email">   <br>'+
        'Password:    <input type="text" ng-model="id">   <br>'+
                   ' <button ng-click="insert()">Insert</button>'+
             '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/index.html"+'>Login</a></div>'+
                '</div>'
    }
}])
app.directive('login',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box">'+
        ' <h2>Login <br> </h2>' +

        'Name:    <input type="text" ng-model="text1">  <br>'+
        'Password:    <input type="text" ng-model="id">   <br>'+
        ' <button ng-click="login()">Login</button>'+
        '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/insert.html"+'>Reigster</a></div>'+
        '</div>'

    }
}])

app.directive('logout',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:'<div class="box">'+
        ' <button ng-click="logout()">Logout</button>'+
        '<div ng-model="msg">'+"{{msg}}"+'</div>'+
        '<div> <a href='+"/index.html"+'>Login</a></div>'+
        '</div>'

    }
}])

app.directive('delete',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box">'+
           ' <h2> Delete a record in database <br> </h2>'+

            '<select ng-options="value.name for value in a" ng-model="selectedName1" required >'+

                '<option value="">-- choose Name--</option>'+

            '</select>'+

            '<button ng-click="delete(selectedName1)">Delete</button> '+
        '</div>'
    }
}])




app.directive('update',[function($scope){
    return{
        restrict:"E",
        replace:true,
        template:' <div class="box"> '+
            '<h2>  Update a record in database <br>   </h2>'+

       'Name:    <input type="text" ng-model="text3">  <br>'+
           ' Password:    <input type="text" ng-model="id">   <br>'+
                    '<button ng-click="update()">Login</button>' +
               ' </div>'
    }
}]) ;



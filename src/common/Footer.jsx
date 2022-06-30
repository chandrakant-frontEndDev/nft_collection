import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../assets/images/collections/Icon 0-02.png'
import Instagram from '../assets/images/instagram@2x.png'
import Discord from '../assets/images/discord@2x.png'
import Twitter from '../assets/images/twiter@2x.png'
import $ from 'jquery'

$(document).ready(function () {

    // Create Alert for Token Using Form "alertgen.php"
        $("#email-submit").submit(function (event) {
            event.preventDefault();
            var elem = $(this);
            var email = elem.find("#email-address").val();
            var result = $(".result");
            // First there will be message validations.. if it is empty it will return FALSE, It will stop here at this point. Process will not move any further..
            
            console.log('working');

            if(email.trim().length < 1 || email.trim().length === '')
            {
                //console.log('empty');
                result.fadeIn('slow');
                result.html("<i style=\"color:#212529\" >Email is required</i>");
                
                return false;
            }
            // if email box REgex is not correct 
            if(IsEmail(email)===false){
                result.fadeIn('slow');
                result.html("<i style=\"color:#212529\" >Enter a valid Email</i>");
                return false;
            }
            else {
                //console.log('not empty');
                var formData = new FormData(this);
                formData.append('service_id', 'service_8jpwkic');
                formData.append('template_id', 'template_eps11w7');
                formData.append('user_id', 'user_ycVQwkppPAJzCHz7f9nB3');
                
                $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                    type: 'POST',
                    data: formData,
                    contentType: false, // auto-detection
                    processData: false, // no need to parse formData to string
                    beforeSend: function() { 
                        result.fadeIn('slow');
                        result.html("<i>Validating...</i>");
                    }
                }).done(function() {
                    result.fadeIn('slow');
                    result.html("<i style=\"color:#92C040\" >Email is registered Successfully</i>");
                    elem[0].reset();
                    // Success Msg
                    setTimeout(function () {
                        result.fadeOut('slow');
                    }, 5000);
                    //alert('Your mail is sent!');
                }).fail(function(error) {
                    result.fadeIn('slow');
                    result.html("<i style=\"color:#fd0000\" >Opss! try again</i>");
                    elem[0].reset();
                    // Success Msg
                    setTimeout(function () {
                        result.fadeOut('slow');
                    }, 5000);
                    // alert('Oops... ' + JSON.stringify(error));
                });
            }
            
        });

        //EMAIL CHECK  
        var email = $("#email-address").val();
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(email)) {
            return false;
            }else{
            return true;
            }
        }
    }); //Document Ready

export default function Footer() {
    return (
        <>
            <div className="main_Container">
                <div className="mainfooterDiv">
                    <Container className="footerIndex">
                        <Row style={{alignItems: "center", padding: "40px", borderTop: "1px solid #fff"}}>
                            {/* <!--<div className="col-lg-4 footerIndexCol1">
                            <div className="email-container"><span className="email-label">GET ON THE LIST</span><br>
                                <div className="">
                                    <form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank"
                                        className="email-form"><input id="email-address" className="m-0 email-input-text"
                                            type="email" placeholder="Email Address" name="EMAIL" required="" value="">
                                            <div aria-hidden="true" style="position: absolute;left: -5000px;"><input type="text"
                                                name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value=""></div>
                                            <button name="subscribe" className="email-submit" type="submit">→</button>
                                    </form>--> */}

                            {/* <!--<a href="mailto:info@cryptobearwatchclub.io" className="cu">
                                        <i className="fa fa-envelope" aria-hidden="true"></i> info@cryptobearwatchclub.io
                                    </a>
                                </div>
                            </div>
                            </div>--> */}
                            <Col lg={4} className="footerIndexCol1">
                                <div className="email-container"><span className="email-label">GET ON THE LIST</span><br/>
                                    <div className="d-flex email-flex"><br/>
                                        <form id="email-submit" method="post" name="mc-embedded-subscribe-form" className="email-form" novalidate="">
                                            <input id="email-address" className="m-0 email-input-text" type="email" placeholder="Email Address" name="email"/>
                                                {/* <!--<div aria-hidden="true" style="position: absolute;left: -5000px;"><input type="text"
                                                name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value=""></div>--> */}
                                                <button name="subscribe" className="email-submit" type="submit">→</button>
                                        </form>
                                    </div>
                                    <div className="result"></div>
                                </div>
                            </Col>
                            <Col lg={4} className="footerIndexCol2">
                                <div className="footer_site_name">
                                    <Image src={Logo} alt="Bouquet Collection" fluid/><div>Bouquet<br></br>Collection</div>
                                </div>
                            </Col>
                            <Col lg={4} className="footerIndexCol3">
                                <div className="footer_rightDiv cr">
                                    <div className="footer_social_link nvico">
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                            <Image src={Instagram} alt="Bouquet Collection instagram"/>
                                        </a>
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://discord.gg/cryptobearwatchclub">
                                            <Image src={Discord} alt="Bouquet Collection discord"/>
                                        </a>
                                        <a target="_blank" rel="noreferrer" className="footer_href" href="https://twitter.com/CryptoBearWC">
                                            <Image src={Twitter} alt="Bouquet Collection twitter"/>
                                        </a>
                                    </div>

                                    <p style={{marginTop: "6px"}}>© 2021 Bouquet Collection</p>
                                    {/* <!--<a href="javascript:;">CBWC Term & Condition</a> <br>
                                    <a href="javascript:;">CBWC Privacy Policy</a>--> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

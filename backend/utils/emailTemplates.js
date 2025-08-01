export const getResetPasswordTemplate = (username, resetUrl) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="x-apple-disable-message-reformatting" />
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <meta name="color-scheme" content="light dark" />
   <meta name="supported-color-schemes" content="light dark" />
   <title></title>
   <style type="text/css" rel="stylesheet" media="all">
     @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
     body {
       width: 100% !important;
       height: 100%;
       margin: 0;
       -webkit-text-size-adjust: none;
     }


     a {
       color: #3869d4;
     }


     a img {
       border: none;
     }


     td {
       word-break: break-word;
     }


     .preheader {
       display: none !important;
       visibility: hidden;
       mso-hide: all;
       font-size: 1px;
       line-height: 1px;
       max-height: 0;
       max-width: 0;
       opacity: 0;
       overflow: hidden;
     }


     body,
     td,
     th {
       font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
     }


     h1 {
       margin-top: 0;
       color: #333333;
       font-size: 22px;
       font-weight: bold;
       text-align: left;
     }


     h2 {
       margin-top: 0;
       color: #333333;
       font-size: 16px;
       font-weight: bold;
       text-align: left;
     }


     h3 {
       margin-top: 0;
       color: #333333;
       font-size: 14px;
       font-weight: bold;
       text-align: left;
     }


     td,
     th {
       font-size: 16px;
     }


     p,
     ul,
     ol,
     blockquote {
       margin: 0.4em 0 1.1875em;
       font-size: 16px;
       line-height: 1.625;
     }


     p.sub {
       font-size: 13px;
     }


     .align-right {
       text-align: right;
     }


     .align-left {
       text-align: left;
     }


     .align-center {
       text-align: center;
     }


     .u-margin-bottom-none {
       margin-bottom: 0;
     }


     .button {
       background-color: #3869d4;
       border-top: 10px solid #3869d4;
       border-right: 18px solid #3869d4;
       border-bottom: 10px solid #3869d4;
       border-left: 18px solid #3869d4;
       display: inline-block;
       color: #fff;
       text-decoration: none;
       border-radius: 3px;
       box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
       -webkit-text-size-adjust: none;
       box-sizing: border-box;
     }


     .button--green {
       background-color: #22bc66;
       border-top: 10px solid #22bc66;
       border-right: 18px solid #22bc66;
       border-bottom: 10px solid #22bc66;
       border-left: 18px solid #22bc66;
     }


     .button--red {
       background-color: #ff6136;
       border-top: 10px solid #ff6136;
       border-right: 18px solid #ff6136;
       border-bottom: 10px solid #ff6136;
       border-left: 18px solid #ff6136;
     }


     @media only screen and (max-width: 500px) {
       .button {
         width: 100% !important;
         text-align: center !important;
       }
     }


     .attributes {
       margin: 0 0 21px;
     }


     .attributes_content {
       background-color: #f4f4f7;
       padding: 16px;
     }


     .attributes_item {
       padding: 0;
     }


     .related {
       width: 100%;
       margin: 0;
       padding: 25px 0 0 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
     }


     .related_item {
       padding: 10px 0;
       color: #cbcccf;
       font-size: 15px;
       line-height: 18px;
     }


     .related_item-title {
       display: block;
       margin: 0.5em 0 0;
     }


     .related_item-thumb {
       display: block;
       padding-bottom: 10px;
     }


     .related_heading {
       border-top: 1px solid #cbcccf;
       text-align: center;
       padding: 25px 0 10px;
     }


     .discount {
       width: 100%;
       margin: 0;
       padding: 24px;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
       background-color: #f4f4f7;
       border: 2px dashed #cbcccf;
     }


     .discount_heading {
       text-align: center;
     }


     .discount_body {
       text-align: center;
       font-size: 15px;
     }


     .social {
       width: auto;
     }


     .social td {
       padding: 0;
       width: auto;
     }


     .social_icon {
       height: 20px;
       margin: 0 8px 10px 8px;
       padding: 0;
     }


     .purchase {
       width: 100%;
       margin: 0;
       padding: 35px 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
     }


     .purchase_content {
       width: 100%;
       margin: 0;
       padding: 25px 0 0 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
     }


     .purchase_item {
       padding: 10px 0;
       color: #51545e;
       font-size: 15px;
       line-height: 18px;
     }


     .purchase_heading {
       padding-bottom: 8px;
       border-bottom: 1px solid #eaeaec;
     }


     .purchase_heading p {
       margin: 0;
       color: #85878e;
       font-size: 12px;
     }


     .purchase_footer {
       padding-top: 15px;
       border-top: 1px solid #eaeaec;
     }


     .purchase_total {
       margin: 0;
       text-align: right;
       font-weight: bold;
       color: #333333;
     }


     .purchase_total--label {
       padding: 0 15px 0 0;
     }


     body {
       background-color: #f2f4f6;
       color: #51545e;
     }


     p {
       color: #51545e;
     }


     .email-wrapper {
       width: 100%;
       margin: 0;
       padding: 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
       background-color: #f2f4f6;
     }


     .email-content {
       width: 100%;
       margin: 0;
       padding: 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
     }


     .email-masthead {
       padding: 25px 0;
       text-align: center;
     }


     .email-masthead_logo {
       width: 94px;
     }


     .email-masthead_name {
       font-size: 16px;
       font-weight: bold;
       color: #a8aaaf;
       text-decoration: none;
       text-shadow: 0 1px 0 white;
     }


     .email-body {
       width: 100%;
       margin: 0;
       padding: 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
     }


     .email-body_inner {
       width: 570px;
       margin: 0 auto;
       padding: 0;
       -premailer-width: 570px;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
       background-color: #ffffff;
     }


     .email-footer {
       width: 570px;
       margin: 0 auto;
       padding: 0;
       -premailer-width: 570px;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
       text-align: center;
     }


     .email-footer p {
       color: #a8aaaf;
     }


     .body-action {
       width: 100%;
       margin: 30px auto;
       padding: 0;
       -premailer-width: 100%;
       -premailer-cellpadding: 0;
       -premailer-cellspacing: 0;
       text-align: center;
     }


     .body-sub {
       margin-top: 25px;
       padding-top: 25px;
       border-top: 1px solid #eaeaec;
     }


     .content-cell {
       padding: 45px;
     }


     @media only screen and (max-width: 600px) {
       .email-body_inner,
       .email-footer {
         width: 100% !important;
       }
     }


     @media (prefers-color-scheme: dark) {
       body,
       .email-body,
       .email-body_inner,
       .email-content,
       .email-wrapper,
       .email-masthead,
       .email-footer {
         background-color: #333333 !important;
         color: #fff !important;
       }
       p,
       ul,
       ol,
       blockquote,
       h1,
       h2,
       h3,
       span,
       .purchase_item {
         color: #fff !important;
       }
       .attributes_content,
       .discount {
         background-color: #222 !important;
       }
       .email-masthead_name {
         text-shadow: none !important;
       }
     }


     :root {
       color-scheme: light dark;
       supported-color-schemes: light dark;
     }
   </style>
   <!--[if mso]>
     <style type="text/css">
       .f-fallback {
         font-family: Arial, sans-serif;
       }
     </style>
   <![endif]-->
 </head>
 <body>
   <span class="preheader"
     >Use this link to reset your password. The link is only valid for 30
     minutes.</span
   >
   <table
     class="email-wrapper"
     width="100%"
     cellpadding="0"
     cellspacing="0"
     role="presentation"
   >
     <tr>
       <td align="center">
         <table
           class="email-content"
           width="100%"
           cellpadding="0"
           cellspacing="0"
           role="presentation"
         >
           <tr>
             <td class="email-masthead">
               <a
                 href="https://Glowing.com"
                 class="f-fallback email-masthead_name"
               >
                 Glowing
               </a>
             </td>
           </tr>


           <tr>
             <td
               class="email-body"
               width="570"
               cellpadding="0"
               cellspacing="0"
             >
               <table
                 class="email-body_inner"
                 align="center"
                 width="570"
                 cellpadding="0"
                 cellspacing="0"
                 role="presentation"
               >
                 <tr>
                   <td class="content-cell">
                     <div class="f-fallback">
                       <h1>Hi ${username},</h1>
                       <p>
                         You recently requested to reset your password for your
                         Ayshan Hasanova account. Use the button below to reset it.
                         <strong
                           >This password reset is only valid for the next 30
                           minutes.</strong
                         >
                       </p>


                       <table
                         class="body-action"
                         align="center"
                         width="100%"
                         cellpadding="0"
                         cellspacing="0"
                         role="presentation"
                       >
                         <tr>
                           <td align="center">
                             <table
                               width="100%"
                               border="0"
                               cellspacing="0"
                               cellpadding="0"
                               role="presentation"
                             >
                               <tr>
                                 <td align="center">
                                   <a
                                     href="${resetUrl}"
                                     class="f-fallback button button--green"
                                     target="_blank"
                                     >Reset your password</a
                                   >
                                 </td>
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                       <p>
                         If you did not request a password reset, please ignore
                         this email or
                         <a href="{{support_url}}">contact support</a> if you
                         have questions.
                       </p>
                       <p>Thanks, <br />The Glowing team</p>




                       <table class="body-sub" role="presentation">
                         <tr>
                           <td>
                             <p class="f-fallback sub">
                               If you’re having trouble with the button above,
                               copy and paste the URL below into your web
                               browser.
                             </p>
                             <p class="f-fallback sub">
                               <a href="${resetUrl}">${resetUrl}</a>
                             </p>
                           </td>
                         </tr>
                       </table>
                     </div>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
           <tr>
             <td>
               <table
                 class="email-footer"
                 align="center"
                 width="570"
                 cellpadding="0"
                 cellspacing="0"
                 role="presentation"
               >
                 <tr>
                   <td class="content-cell" align="center">
                     <p class="f-fallback sub align-center">
                       Ayshan Hasanova
                       <br />Baku, Azerbaijan. <br /> Sergey Yesenin 104
                     </p>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>
       </td>
     </tr>
   </table>
 </body>
</html>`

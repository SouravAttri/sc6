import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import media from "../uikit/mediaTemplate"

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;

  ${media.desktop`
    padding: 2.369rem;
  `}

  h1 {
    font-size: 1.777rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 1rem -1px;

    ${media.desktop`
      font-size: 2.369rem;
      margin: 0 0 1.333rem -1px;
    `}
  }

  h3 {
    font-size: 1.333rem;
    margin: 1.333rem 0 1rem;
    line-height: 1.2;
    font-weight: 700;

    ${media.desktop`
      font-size: 1.777rem;
      margin: 1.333rem 0 0.75rem;
    `}
  }

  p,
  ol,
  ul {
    margin: 0 0 1rem;

    &.bigger {
      font-size: 1rem;
      margin-bottom: 1rem;

      ${media.desktop`
        font-size: 1.333rem;
        margin-bottom: 1.333rem;
      `}
    }

    &.smaller {
      font-size: 0.75rem;
    }
  }

  ol,
  ul {
    list-style-position: inside;
  }

  ul li {
    list-style-type: disc;
  }
`

const ForAdvertisers = () => (
  <Layout>
    <SEO title="Terms and conditions" />
    <Section>
      <h1>Terms and conditions of use</h1>
      <p>
        If you visit, post content to, or in any other way interact with or
        within this website, you accept these terms and conditions. Please read
        them carefully. In addition, the terms and conditions apply for
        Campaigns organized or hosted by House of Education AB, on mystudy.fit,
        sqore.com, houseofeducation.com or Satellite sites. The Company
        stipulates the right to change the terms and conditions published on the
        website, without notice.
      </p>
      <h3>Definitions</h3>
      <p>
        <strong>The Company</strong>: House of Education AB, a Private Limited
        Liability Company, incorporated under the laws of Sweden under the
        organizational number 556763-8951. Our registered office address is:
        Br&auml;nnkyrkagatan 14A, 118 20 Stockholm, Sweden.
      </p>
      <p>
        <strong>Company Website</strong>: Any website which is owned and
        operated by the Company, including mystudy.fit, houseofeducation.com and
        sqore.com. The Company reserves the right to amend these terms to
        include any future websites that the Company may operate at such time
        without notice.
      </p>
      <p>
        <strong>Satellite sites</strong>: Websites or other domains, wholly or
        partially operated by the Company or Partners, which use the the
        Company&rsquo;s platforms and/or technology, including in particular
        www.studentcompetitions.com. These terms and conditions apply for all
        Satellite sites as well, so if you register on a Campaign powered by the
        Company and operating under these same terms and conditions on a
        Satellite site, you may also become a member of other Company Websites.
      </p>
      <p>
        <strong>Campaigns</strong>: all campaigns, quizzes, competitions,
        challenges, interest enquiries, forms and other opportunities uploaded
        to Company Website or Satellite sites intended to match one or more
        individuals with an education or career opportunity &ndash; most often
        (but not always) a Campaign consist of filling in a profile form,
        answering a series of questions, and/or potentially uploading a written
        statement, CV or similar information to engage your interest in a
        certain study or career opportunity.
      </p>
      <p>
        <strong>Partners</strong>: Agents, contractors, customers, universities,
        companies listing career or study opportunities or other affiliated
        partners to the Company or to Company Website or Satellite sites.
      </p>
      <h3>Electronic Communications</h3>
      <p>
        When you visit a Company Website, any of our affiliate Satellite sites,
        or send e-mails to us, you are communicating with us electronically. You
        consent to receive communications from us electronically. We will
        communicate with you by e-mail or by posting notices on this site. We
        may also contact you via phone for marketing purposes if you have
        supplied your phone number, such telemarketing will be limited to any
        specific Campaigns that you have partaken in, i.e. to promote such
        specific Campaign and associated Partners. You may also be contacted
        directly by a school, university or company that you have partaken in a
        Campaign for through a Company Website or Satellite site.
      </p>
      <h3>Information about you and your visits to the site</h3>
      <p>
        You need to register to access certain functions on Company Website or
        on our Satellite Sites used for Campaigns. By signing up, you give your
        consent that the Company can use your personal data and contributions
        for the purposes described in our Data Protection and Privacy Policy,
        wherein the main purpose is to try to match you with educations and
        career opportunities that fit your profile. We may also share your data
        with our Partners, in particular Partner universities and companies for
        which you have participated in a Campaign for. In addition, the Company
        can save the personal data for later usage and consequently use the
        information to contact you regarding other similar Campaigns on Company
        Website or educational programs with Partners. You can find more
        information about how we will use your data in our Data Protection and
        Privacy Policy.
      </p>
      <p>
        By using the Site, you consent to such processing and you warrant that
        all data provided by you is accurate.
      </p>
      <p>
        You can at any time cancel your account or request to have your data
        deleted, or for us to stop sharing it with Partners by sending an email
        to&nbsp;support@mystudy.fit.
      </p>
      <h3>Copyright</h3>
      <p>
        All content included on this site, such as but not limited to text,
        graphics, logos, button icons, images, audio clips, digital downloads,
        data compilations, and software, is the property of the Company or its
        content suppliers and protected by international copyright laws. The
        compilation of all content on this site is the exclusive property of the
        Company, with copyright authorship for this collection by the Company,
        and protected by international copyright laws.
      </p>
      <h3>Trademarks</h3>
      <p>
        The Company&rsquo;s trademarks, whether registered or
        unregistered,including but not limited to &ldquo;My Study Fit&rdquo; and
        &ldquo;Sqore&rdquo;, may not be used in connection with any product or
        service that is not owned or operated by the Company, in any manner that
        is likely to cause confusion among users, or in any manner that
        disparages or discredits the Company. All other trademarks not owned by
        the Company or its subsidiaries that appear on this site are the
        property of their respective owners, who may or may not be affiliated
        with, connected to, or sponsored by the Company or its subsidiaries.
      </p>
      <h3>Reliance on Information Posted</h3>
      <p>
        Commentary and other materials posted on the Site are not intended to
        amount to advice on which reliance should be placed. We therefore
        disclaim all liability and responsibility arising from any reliance
        placed on such materials by any visitor to the Site, or by anyone who
        may be informed of any of its contents.
      </p>
      <h3>Our Liability</h3>
      <p>
        This site is provided on an "as is" and "as available" basis. The
        material displayed on the site is provided without any guarantees,
        conditions or warranties as to its accuracy. To the extent permitted by
        law, the Company and our Partners hereby expressly exclude:
      </p>
      <ol>
        <li>
          all conditions, warranties and other terms which might otherwise be
          implied by statute, common law or the law of equity;
        </li>
        <li>
          any liability for any direct, indirect or consequential loss or damage
          incurred by any user in connection with the Site or in connection with
          the use, inability to use, or results of the use of the Site, any
          websites linked to it and any materials posted on it, including,
          without limitation any liability for:
        </li>
        <ul>
          <li>loss of income or revenue;</li>
          <li>loss of business;</li>
          <li>loss of profits or contracts;</li>
          <li>loss of anticipated savings;</li>
          <li>loss of data;</li>
          <li>loss of goodwill;</li>
          <li>wasted management or office time; and</li>
          <li>
            for any other loss or damage of any kind, however arising and
            whether caused by tort (including negligence), breach of contract or
            otherwise, even if foreseeable.
          </li>
        </ul>
      </ol>
      <h3>License and Site Access</h3>
      <p>
        The Company grants you a limited license to access and make personal use
        of this site and not to download (other than page caching) or modify it,
        or any portion of it, except with express written consent of the
        Company. This license does not include any resale or commercial use of
        this site or its contents; any collection and use of any product
        listings, descriptions, or prices; any derivative use of this site or
        its contents; any downloading or copying of account information for the
        benefit of another merchant; or any use of data mining, robots, or
        similar data gathering and extraction tools. This site or any portion of
        this site may not be reproduced, duplicated, copied, sold, resold,
        visited, or otherwise exploited for any commercial purpose without
        express written consent of the Company. You may not frame or utilize
        framing techniques to enclose any trademark, logo, or other proprietary
        information (including images, text, page layout, or form) of the
        Company and our associates without express written consent. You may not
        use any meta tags or any other "hidden text" utilizing the Company's
        name or trademarks without the express written consent of the Company.
        Any unauthorized use terminates the permission or license.
      </p>
      <h3>Your Membership Account</h3>
      <p>
        If you use this site, you are responsible for maintaining the
        confidentiality of your account and password and for restricting access
        to your computer, and you agree to accept responsibility for all
        activities that occur under your account or password. If you are under
        the age of 16, you may use our website only with involvement of a parent
        or legal guardian. The Company and its associates reserve the right to
        refuse service, terminate accounts, remove or edit content, or cancel
        orders in their sole discretion.
      </p>
      <h3>Content</h3>
      <p>
        Visitors may post reviews, comments, and other content; and submit
        suggestions, ideas, comments, questions, or other information, so long
        as the content is not illegal, obscene, threatening, defamatory,
        invasive of privacy, infringing of intellectual property rights, or
        otherwise injurious to third parties or objectionable and does not
        consist of or contain software viruses, political campaigning,
        commercial solicitation, chain letters, mass mailings, or any form of
        "spam." You may not use a false e-mail address, impersonate any person
        or entity, or otherwise mislead as to the origin of intellectual
        property, a credit card or other content. The Company reserves the right
        (but not the obligation) to remove or edit such content. If you do post
        content or submit material, including any content submitted via
        Campaigns, and unless we indicate otherwise, you grant the Company and
        its associates a non-exclusive, royalty-free, perpetual, irrevocable,
        and fully sub licensable right to use, reproduce, modify, adapt,
        publish, translate, create derivative works from, distribute, and
        display such content throughout the world in any media. You represent
        and warrant that you own or otherwise control all of the rights to the
        content that you post; that the content is accurate; that use of the
        content you supply does not violate this policy and will not cause
        injury to any person or entity; and that you will indemnify the Company
        and its associates for all claims resulting from content you supply.
      </p>
      <h3>Applicable Law</h3>
      <p>
        By visiting Company Websites or Satellite sites and participating in
        Campaigns organized or hosted by the Company, you agree that the laws of
        Sweden, without regard to principles of conflict of laws, will govern
        these Conditions of Use and any dispute of any sort that might arise
        between you and the Company or its associates.
      </p>
      <h3>Disputes</h3>
      <p>
        Any dispute relating in any way to your visit to a Company Website,
        participating in Campaigns organized or hosted by the Company, or to
        products or services you purchase from the Company shall be submitted to
        confidential arbitration in Sweden, except that, to the extent you have
        in any manner violated or threatened to violate the Company's
        intellectual property rights, the Company may seek injunctive or other
        appropriate relief in any state or federal court in the state of Sweden,
        and you consent to exclusive jurisdiction and venue in such courts.
      </p>
      <h3>Change of Control</h3>
      <p>
        If the Company engages in a merger, acquisition, bankruptcy,
        dissolution, reorganization sale of some or all of the Company&rsquo;s
        assets or stock, financing, public offering of securities, a similar
        transaction or proceeding, or steps in contemplation of such activities
        (e.g. due diligence), some or all information that the Company has
        collected from its users, including personal data, may be shared of
        transferred, subject to standard confidentiality arrangements.
      </p>
      <h3>Site Policies, Modification, and Severability</h3>
      <p>
        Please review our other policies, such as Campaign specific rules posted
        on Satellite sites and on this site. These policies also govern your
        visit to www.studentcompetitions.com. We reserve the right to make
        changes to our site, policies, and these Conditions of Use at any time.
        If any of these conditions shall be deemed invalid, void, or for any
        reason unenforceable, that condition shall be deemed severable and shall
        not affect the validity and enforceability of any remaining
        condition.&nbsp;
      </p>
      <h3>Data Protection and Privacy Policy</h3>
      <p>
        House of Education AB is committed to protecting the privacy of our
        users. We want to provide a safe and secure user experience. We will
        ensure that the information you submit to us via our website at remains
        private and is only used for the purposes set out in this policy. The
        terms &ldquo;the Company&rdquo;, &ldquo;Company Website&rdquo;,
        &ldquo;Satellite sites&rdquo;, &ldquo;Partners&rdquo;, and
        &ldquo;Campaigns&rdquo; shall have the same meaning as in the Terms and
        Conditions of Use.
      </p>
      <h3>The Information We Collect and How We Use It</h3>
      <p>
        Your personal details, including your name, e-mail address, all
        information that you fill in to the different profile forms and any quiz
        answers you give are held and may be used by us for the following
        purposes:
      </p>
      <p>
        For matching your details (including for example if you meet a
        university&rsquo;s eligibility requirement and to see whether your
        interests match a certain program) with relevant universities, schools,
        educations, programs and career opportunities offered by our Partners.
        Such matching will always happen for any specific Campaigns you have
        participated in, but could also be done for similar opportunities or
        Campaigns. So for example, if you partake in an opportunity to study for
        an MBA at a certain university in the United Kingdom, we may also see if
        you are a fit for and contact you regarding other study opportunities at
        the same school, in the United Kingdom, or for other MBAs (including
        outside of the United Kingdom). Any such matching is based on general
        data analysis on our users to best try to serve your interests and allow
        you to find a study or career opportunity that could be right for you;
      </p>
      <p>
        For keeping you informed of the Company&rsquo;s services, general news
        and wider developments in similar areas to what you have shown an
        interest for on our site;
      </p>
      <p>
        For tailoring the version of our website you see when you log on, how
        you use the sites and to make it relevant to you; and/or
      </p>
      <p>
        For retargeting ads on social media related to Campaigns which you have
        participated in.
      </p>
      <h3>Disclosures of Your Information</h3>
      <p>
        We will share your information within the the Company&rsquo;s group of
        companies (including subsidiaries and parent companies) where necessary
        in order to provide you with our services. We will also share relevant
        information that you have filled in to your eligibility form,
        application form, or Campaign, with the Partner for which the form or
        Campaign is connected to. Any Partner such as a company, university or
        school may use the information to contact you or send further
        information about their programs and career or study opportunities to
        you.
      </p>
      <p>
        It is possible that the Company could merge or be acquired by another
        business, or that certain assets of the company are sold to a third
        party. If this happens, we may share the information that relates to you
        with the new owners of the business and their advisers.
      </p>
      <p>
        We may also release information relating to you to regulatory or law
        enforcement authorities, if required to do so.
      </p>
      <h3>Communication</h3>
      <p>
        To partake in any Campaign, you will be required to provide your e-mail
        address, which will be used for the purpose of keeping you informed of
        the status of the Campaign you have partaken in and for the Company and
        the relevant Partner to reach out to you. The Company may also contact
        you about similar Campaigns and career or study opportunities with
        different Partners than what you have directly interacted with on this
        site. You may also be asked to submit other contact information such as
        your phone number or home address, all of which can be used for the same
        purpose as above.
      </p>
      <p>
        Should you decide that you no longer wish to receive this communication,
        you may unsubscribe to newsletters, and you always have the right to
        reach out to us to have your email or other data removed from our
        systems. To do so, please contact us at support@mystudy.fit or update
        your account settings on this site.
      </p>
      <h3>Aggregate Information About Online Visitors</h3>
      <p>
        We gather information and statistics collectively about all visitors to
        this website and all of our Satellite sites worldwide, for example,
        which area users' access most frequently come from and which services
        users' access the most. We only use such data in the aggregate form.
        This information helps us determine what further development work could
        be most beneficial for our users and how we can continually improve our
        online services to create a better overall experience for our users. It
        also allows us to populate the site with more relevant content and
        Campaigns that our users may be interested in. We may also publish some
        of this information, such as but not limited to the total number of
        users from different regions of the world, for marketing purposes.
      </p>
      <h3>Access to information and right to be forgotten</h3>
      <p>
        You have the right at any time to ask us for a copy of the information
        that we hold on you. If you would like to make a request for
        information, please contact support@mystudy.fit. You also have the right
        to ask the Company to stop using your information or to delete it.
      </p>
      <h3>Other Websites</h3>
      <p>
        Please note that clicking on to links and banner advertisements may
        result in your transfer to another website, where data privacy practices
        may be different to that of the Company&rsquo;s. Visitors should consult
        the other websites' privacy policies as we are not responsible for, and
        have no control over, information that is submitted to or collected by
        these third parties.
      </p>
      <h3>Changes to our Privacy Policy</h3>
      <p>
        This privacy policy may be changed by the Company at any time. If we
        change our privacy policy in the future, we will set out those changes
        here, so that you will always know what personal information we gather,
        the purposes we might use it for and to whom we might disclose it. If,
        at any time, you have questions or concerns about the Company's online
        privacy commitment, please feel free to e-mail us at
        support@mystudy.fit.
      </p>
      <h3>Cookie Policy</h3>
      <p>
        At this site, we use cookies and tracking technologies on our websites
        and mobile apps to enable us to analyze use of our online services, to
        improve and personalize your experience of our services and to serve
        advertising which, on some services, may be tailored to you based on
        your browsing behavior and other data held about you.
      </p>
      <h3>What are Cookies</h3>
      <p>
        A cookie is a small text file that is sent by a website to your computer
        or mobile device where it is stored by your web browser. A cookie
        contains limited non-personal data, usually a unique identifier and the
        name of the site. This enables a website to recognize you as you move
        around the site and/or each time you revisit. Cookies are used for a
        wide variety of purposes such as to keep you logged in or to remember
        your preferences and settings, to analyze how the site is used by you,
        and to serve advertising to you.
      </p>
      <p>
        Cookies may be served to you by the website you are visiting (a "first
        party cookie") or by another organization providing services to that
        website, such as an analytics organization or advertising network (a
        "third party cookie"). They will either be stored for the duration of
        your visit (a "session cookie") or they will remain on your device for a
        fixed period, which could be months or even years, to remember you
        across multiple browsing sessions (a "persistent cookie").
      </p>
      <h3>Our Cookies Policy</h3>
      <p>
        House of Education AB respects your right to privacy and we aim to be
        transparent at all times about when, how and why data about you and your
        browsing behaviors may be used in connection with our services. We are
        committed to using cookies and tracking technologies fairly and in
        accordance with your privacy rights.
      </p>
      <h3>Managing Cookies</h3>
      <p>
        You can choose how web browser cookies are handled by your device via
        your browser settings including to enable, refuse or delete all cookies.
        If you choose not to receive cookies at any time, the website may not
        function properly and certain services will not be provided. Each
        browser is different, so check the "Help" menu of your browser to learn
        how to change your cookie preferences.
      </p>
    </Section>
  </Layout>
)

export default ForAdvertisers

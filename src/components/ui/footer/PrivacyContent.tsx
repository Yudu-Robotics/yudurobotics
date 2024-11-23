import Link from "next/link";
import React from "react";

export default function PrivacyContent() {
  return (
    <div className="font-">
      <p className="font-semibold"></p>
      <br />
      <p className="font-semibold">
        Thank you for visiting{" "}
        <Link href="/home" target="_blank" className="text-blue-600 underline">
          www.yudurobotics.com{" "}
        </Link>
        (“this website”).​
      </p>{" "}
      <p>
        Yudu Robotics, a branch of Evobi Automations Pvt. Ltd., is committed to
        protecting your privacy. This Privacy Policy explains our data
        collection practices and your rights regarding your information. For
        purposes of this policy, “Yudu Robotics,” “we,” “us,” and “our” refer to
        <span className="font-semibold"> Evobi Automations Pvt. Ltd.</span>
      </p>{" "}
      <p className="my-4">
        By using this website, you agree to the terms outlined in this policy.
        If you do not agree, please refrain from using our website.
      </p>{" "}
      <p>
        <p className="my-3 font-semibold">1. Information We Collect</p>{" "}
        <p className="mb-3">
          Since Yudu Robotics is a marketing website without user account
          creation or purchasing options, our data collection is minimal and
          mainly automated through browsing interactions.
        </p>
      </p>
      <p>
        <p className="my-2 font-semibold"> 1.1 Automatically Collected Data</p>{" "}
        When you visit our website, certain data is collected automatically:
        <div className="ml-4">
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>
              <span className="font-semibold">System Data:</span> Information
              such as IP address, browser type, device type, and operating
              system.
            </div>
          </div>
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>
              <span className="font-semibold">Usage Data:</span> Details on
              website interaction, including pages visited, time spent, and
              click actions.
            </div>
          </div>
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>
              <span className="font-semibold">Approximate Location:</span>{" "}
              General geographic information based on your IP address.
            </div>
          </div>
        </div>
        This data is used for website performance and improvement purposes.
      </p>
      <p>
        <p className="my-3 font-semibold">
          2. Use of Cookies and Data Collection Tools
        </p>
        We use cookies and similar tools to track your interactions on our
        website. These cookies are:{" "}
        <div className="ml-4">
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>
              <span className="font-semibold">Strictly Necessary Cookies:</span>{" "}
              Enable basic website functionality.
            </div>
          </div>
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>
              <span className="font-semibold">Performance Cookies:</span> Help
              us understand how users interact with the site to improve
              performance.
            </div>
          </div>
        </div>
        You can manage your cookie preferences through your browser settings.
      </p>{" "}
      <p>
        <p className="my-3 font-semibold">3. How We Use Your Data</p>We use the
        data collected to:
        <div className="ml-4">
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>Improve and maintain our website.</div>
          </div>
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>Analyze user trends and traffic patterns.</div>
          </div>
          <div className="flex ">
            <div className="px-1">∙</div>
            <div>Enhance our content and user experience.</div>
          </div>
        </div>
        We do not use this data to personally identify users.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">
          4. Information Sharing and Disclosure
        </p>{" "}
        Yudu Robotics does not sell or rent your data. Limited information, such
        as anonymized usage data, may be shared with service providers who
        assist us in website maintenance and analytics. These providers are
        required to use the data solely for the services they provide to us.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">5. Data Security</p> We prioritize
        protecting your information and have implemented standard security
        measures to prevent unauthorized access. However, we cannot guarantee
        absolute security due to the nature of the internet. We advise you to
        take reasonable precautions, like using secure connections when
        browsing.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">6. External Links</p>Our website may
        contain links to third-party websites. We are not responsible for the
        privacy practices or content of these external sites. We encourage you
        to review the privacy policies of any websites you visit through links
        on our site.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">7. Children’s Privacy</p> Our website
        is intended for a general audience and does not knowingly collect
        information from children under the age of 13. Parents are encouraged to
        monitor their children’s online activity.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">8. Updates to This Privacy Policy</p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices. When we make material changes, we will notify you by posting
        the updated policy on this page. The revised policy will be effective as
        of the date posted.
      </p>{" "}
      <p>
        <p className="font-semibold my-3">9. Contact Information</p>For
        questions about this Privacy Policy, please contact us at:​
        <p className="font-semibold">support@yudurobotics.com​</p>
        <p className="font-semibold">Evobi Automations Pvt. Ltd.,</p>​ No 29,
        Beratena Agrahara, Next to Play Factory, Hosur Road, Bengaluru,
        Karnataka-560100{" "}
      </p>
    </div>
  );
}

import React from "react";

export default function WarrantyContent() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center font-tthoves-medium">
        Yudu Robotics Products Warranty - Terms and Conditions
      </h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4 font-tthoves-medium">1. Warranty</h2>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.1 Duration of Warranty</h3>
        <p className="mb-4 font-tthoves-medium">
          Yudu Robotics products are warranted for a period of 1 year from the date of purchase. This warranty covers all hardware components against manufacturing and production defects.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.2 Warranty Coverage (Inclusions)</h3>
        <ul className="list-disc list-inside mb-4 font-tthoves-medium">
          <li>Manufacturing defects in hardware components.</li>
          <li>Internal malfunctions such as circuit failures or electronic defects.</li>
          <li>Non-functional products on delivery (DOA).</li>
          <li>Defective materials or poor workmanship during manufacturing.</li>
          <li>Replacement of components under warranty.</li>
          <li>Free technical guidance for covered issues during the warranty period.</li>
        </ul>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.3 Exclusions from Warranty</h3>
        <ul className="list-disc list-inside mb-4 font-tthoves-medium">
          <li>Exposure to moisture or any liquid.</li>
          <li>Submersion in water.</li>
          <li>Damage caused by natural calamities.</li>
          <li>Misuse, improper handling, or exposure to unsafe conditions.</li>
          <li>Reverse polarity connections or incorrect wiring.</li>
          <li>Forced breakage of components.</li>
          <li>Theft or loss of the kit or its modules.</li>
          <li>Placement in unsafe areas with potential damage from natural creatures.</li>
          <li>All consumables.</li>
        </ul>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.4 Items Exempted from Warranty</h3>
        <p className="mb-4 font-tthoves-medium">
          Consumable items such as cables, connectors, motors, nuts, bolts, plastic components, batteries, and other non-electrical components are not covered.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.5 Proof of Purchase Requirement</h3>
        <p className="mb-4 font-tthoves-medium">
          Warranty claims must include proof of purchase, such as the original invoice.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.6 Replacement and Repairs</h3>
        <p className="mb-4 font-tthoves-medium">
          If a defect is identified, products may be repaired or replaced. Replacement products may be new or refurbished. Issues must be reported within one week of receiving the product with proper proof.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.7 Shipping Costs for Warranty Claims</h3>
        <p className="mb-4 font-tthoves-medium">
          Shipping costs depend on whether the defect occurred upon receipt or after use. Proper proof is required for claims.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.8 Process for Warranty Claims</h3>
        <p className="mb-4 font-tthoves-medium">
          Contact support at <a href="mailto:support@yudurobotics.com" className="text-blue-600 underline">support@yudurobotics.com</a> or call +91 9606755032. Ship the product securely if required.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.9 Warranty Limitations</h3>
        <p className="mb-4 font-tthoves-medium">Warranty applies only to the original purchaser and is non-transferable.</p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.10 Exclusion of Indirect Damages</h3>
        <p className="mb-4 font-tthoves-medium">
          The company is not liable for incidental, indirect, or consequential damages, including data or profit loss.
        </p>
        <h3 className="text-xl font-medium mb-2 font-tthoves-medium">1.11 Updates to Warranty Terms</h3>
        <p className="mb-4 font-tthoves-medium">
          Warranty terms may change without prior notice. Updated terms apply from the date of publication.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 font-tthoves-medium">2. Extended Warranty</h2>
        <p className="mb-4 font-tthoves-medium">
          Extended warranty options are available for an additional fee. Contact support for more details.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 font-tthoves-medium">3. Contact Information</h2>
        <p className="mb-4 font-tthoves-medium">
          Email: <a href="mailto:support@yudurobotics.com" className="text-blue-600 underline">support@yudurobotics.com</a>
          <br />
          Phone: +91 9606755032
          <br />
          Website: <a href="http://www.yudurobotics.com" className="text-blue-600 underline">www.yudurobotics.com</a>
        </p>
      </section>
    </div>
  );
}

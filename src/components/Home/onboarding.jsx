
const OnboardingProcess = () => {
  return (
    <section className="onboarding-process-section py-12 w-full rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-2xl m-2 p-2 md:text-3xl font-semibold mb-4 text-center">
          Onboarding Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-4">For Clients</h3>
            <ul className="list-disc pl-6">
              <li>Create an Account</li>
              <li>Fund Your Account</li>
              <li>Post a Job</li>
              <li>Select the Best Freelancer</li>
              <li>Assign Work</li>
              <li>Pay in Escrow</li>
              <li>Receive Job</li>
              <li>Approve Work</li>
              <li>Finalize Payment</li>
            </ul>
          </div>
          <div className="bg-blue-500 p-6 shadow-lg rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-4">For Freelancers</h3>
            <ul className="list-disc pl-6">
              <li>Register and Create Profile</li>
              <li>Wait for Approval</li>
              <li>Browse Available Jobs</li>
              <li>Submit Bids</li>
              <li>Get Selected by a Client</li>
              <li>Complete the Job</li>
              <li>Submit Work for Client Approval</li>
              <li>Get Paid Upon Approval</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;

import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { RESUMES_LIST } from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Pulse" },
    { name: "description", content: "Pulsify your resume!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Know the pulse of your resume and job progress.</h1>
          <h2>
            Get insights into your job applications and improve your resume
            scores.
          </h2>
        </div>

        {RESUMES_LIST.length > 0 && (
          <div className="resumes-section">
            {RESUMES_LIST.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

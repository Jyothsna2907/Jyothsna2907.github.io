"use client";

import { useActionState } from "react"; 
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";
import { Send, Loader2, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SectionWrapper } from './SectionWrapper';


const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialFormState: ContactFormState = {
  message: "",
  success: false,
};

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialFormState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message Sent!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        reset(); 
      }
    }
  }, [state, toast, reset]);
  
  const handleFormSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formAction(formData);
  };


  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <Card className="max-w-2xl mx-auto shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Mail className="h-7 w-7 text-primary" />
            Send a Message
          </CardTitle>
          <CardDescription>
            Have a question or want to collaborate? Feel free to reach out.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-semibold">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your Name"
                className="mt-1"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="font-semibold">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className="mt-1"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="font-semibold">Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                rows={5}
                placeholder="Your message..."
                className="mt-1"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
              {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </form>
         {state.message && !state.success && state.errors === undefined && (
            <Alert variant="destructive" className="mt-4 mx-6 mb-6 transition-all duration-300 ease-in-out hover:shadow-md">
                <AlertTitle>Submission Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        )}
      </Card>
    </SectionWrapper>
  );
}

function ContactSection() {
  return (
    <ContactForm /> 
  );
}

export { ContactSection };

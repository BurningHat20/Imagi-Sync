import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
<<<<<<< HEAD
        userId,
      },
    });
=======
        userId
      }
    })
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
<<<<<<< HEAD
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
=======
      })

      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
<<<<<<< HEAD
              name: "Imagi-Sync Pro",
              description: "Unlimited AI Generations",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
=======
              name: "Genius Pro",
              description: "Unlimited AI Generations"
            },
            unit_amount: 2000,
            recurring: {
              interval: "month"
            }
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
<<<<<<< HEAD
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
=======
    })

    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad

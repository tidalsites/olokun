import { TContactSchema } from "@/schemas/contact";
import {
  Body,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const ContactEmail = ({
  first_name,
  last_name,
  email,
  phone,
  description,
  engineering,
  consulting,
  it,
  logistics,
}: TContactSchema) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Request</Preview>
      <Tailwind>
        <Body>
          <Section className="bg-black text-white w-full text-center rounded-lg">
            <Heading className="text-2xl">{`${first_name} ${last_name} is reaching out to you`}</Heading>
          </Section>
          <Section>
            <Row className="flex gap-4 my-8">
              <Column className="p-4 rounded-lg w-fit">
                <Text className="text-lg w-fit">User Details:</Text>
                <Text>First Name: {first_name}</Text>
                <Text>Last Name: {last_name}</Text>
                <Text>Email: {email}</Text>
                <Text>Phone Number: {phone}</Text>
              </Column>
            </Row>

            <Row>
              <Column className="p-4 rounded-lg w-fit">
                <Text className="text-lg w-fit">Services Requested:</Text>
                <Text>
                  Engineering:{" "}
                  {engineering ? (
                    <span className="text-green-700 text-xl">&#x1F5F9;</span>
                  ) : (
                    <span className="text-brand text-xl">&#x10102;</span>
                  )}
                </Text>
                <Text>
                  Consulting:{" "}
                  {consulting ? (
                    <span className="text-green-700 text-xl">&#x1F5F9;</span>
                  ) : (
                    <span className="text-brand text-xl">&#x10102;</span>
                  )}
                </Text>
                <Text>
                  Information Technology:{" "}
                  {it ? (
                    <span className="text-green-700 text-xl">&#x1F5F9;</span>
                  ) : (
                    <span className="text-brand text-xl">&#x10102;</span>
                  )}
                </Text>
                <Text>
                  Logistics:{" "}
                  {logistics ? (
                    <span className="text-green-700 text-xl">&#x1F5F9;</span>
                  ) : (
                    <span className="text-brand text-xl">&#x10102;</span>
                  )}
                </Text>
              </Column>
            </Row>

            <Row>
              <Column className="p-4 rounded-lg w-fit">
                <Text className="text-lg w-fit">User Request:</Text>
                <Text className="max-w-prose">{description}</Text>
              </Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

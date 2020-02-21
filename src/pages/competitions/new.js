import React, { useState } from "react"
import { graphql } from "gatsby"
import { Formik, Form } from "formik"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Select from "../../components/Select"
import Textarea from "../../components/Textarea"
import FormField from "../../components/FormField"
import media from "../../uikit/mediaTemplate"

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
    margin: 0 0 0 -1px;

    ${media.desktop`
      font-size: 2.369rem;
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

  p {
    margin: 0 0 1rem;

    &.bigger {
      font-size: 1rem;
      margin: 1rem 0;

      ${media.desktop`
        font-size: 1.333rem;
        margin-bottom: 1.333rem;
      `}
    }

    &.smaller {
      font-size: 0.75rem;
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  button {
    border: none;
    margin: 1rem 0;
    padding: 0;
    width: auto;
    overflow: visible;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    border-radius: 1.777rem;
    background: rgba(35, 139, 192, 1);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: center;
    padding: 0 1rem;

    &:hover,
    &:active {
      border: none;
      opacity: 0.75;
    }
  }
`

const Instructions = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: -0.75rem 0 0 !important;
`

export const query = graphql`
  query GET_OPTIONS {
    allDatoCmsCompetitionPrize {
      edges {
        node {
          originalId
          title
        }
      }
    }
    allDatoCmsCompetitionRegion {
      edges {
        node {
          originalId
          title
        }
      }
    }
    allDatoCmsCompetitionCategory {
      edges {
        node {
          originalId
          title
        }
      }
    }
    allDatoCmsCompetitionEducationLevel {
      edges {
        node {
          originalId
          title
        }
      }
    }
  }
`

const Dropdown = ({ placeholder, items, field, form, ...props }) => {
  return (
    <Select {...props} {...field}>
      <option disabled selected>
        {placeholder}
      </option>
      {items.map(item => (
        <option key={item.originalId} value={item.originalId}>
          {item.title}
        </option>
      ))}
    </Select>
  )
}

const SUBMISSION_ENDPOINT =
  "https://21oi1dqui0.execute-api.us-east-1.amazonaws.com/default/sc-com-submit-competition"

const validateUrl = value => {
  if (!value || !value.length) return "Required"
  if (!value.match(/^https?:\/\/.+\..+/))
    return "Must be a valid URL (starting with http://)"
  return null
}

const validateEmail = value => {
  if (!value || !value.length) return "Required"
  if (!value.match(/^.+@.+/)) return "Must be a valid email address"
  return null
}

const parseValues = values =>
  JSON.stringify({
    ...values,
    prize: [values.prize],
    region: [values.region],
    categories: [values.categories],
    education_level: [values.education_level],
  })

const parseOptions = ({
  allDatoCmsCompetitionPrize,
  allDatoCmsCompetitionRegion,
  allDatoCmsCompetitionCategory,
  allDatoCmsCompetitionEducationLevel,
}) => ({
  prizes: allDatoCmsCompetitionPrize.edges.map(({ node }) => node),
  regions: allDatoCmsCompetitionRegion.edges.map(({ node }) => node),
  categories: allDatoCmsCompetitionCategory.edges.map(({ node }) => node),
  educationLevels: allDatoCmsCompetitionEducationLevel.edges.map(
    ({ node }) => node
  ),
})

const NewCompetition = ({ data }) => {
  const [isSubmitted, setSubmitted] = useState(false)
  const { prizes, regions, categories, educationLevels } = parseOptions(data)

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true)
    fetch(SUBMISSION_ENDPOINT, {
      method: "POST",
      body: parseValues(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(({ data }) => {
        if (data.id) {
          setSubmitted(true)
        } else {
          data.forEach(({ attributes: { details: { field, message } } }) => {
            setFieldError(field, message || "Something went wrong")
            setSubmitting(false)
          })
        }
      })
  }

  if (isSubmitted)
    return (
      <Layout>
        <SEO title="Submit competition" />
        <Section>
          <h1>Thanks for your submission</h1>
          <p className="bigger">
            We will now review your submission and hopefully it will be live on
            our site soon.
          </p>
        </Section>
      </Layout>
    )

  return (
    <Layout>
      <SEO title="Submit competition" />
      <Section>
        <h1>We love to hear about new competitions!</h1>
        <p className="bigger">
          Please use this form to tell us about new competitions. We will review
          all posted competitions and possibly edit them a bit, before they are
          published on our site.
        </p>
        <p>
          Studentcompetitions.com alone decides what content that will be
          published or not. However, here are some guidelines:
        </p>
        <ul>
          <li>
            The competition must be at least on national level, up to global (or
            universal) level.
          </li>
          <li>
            The competition must not exclusively target students (but it helps
            if it does).
          </li>
          <li>The competition must have a website.</li>
        </ul>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ competition_url: "http://" }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <FormField name="title" label="Title" />
              <Instructions>What is the title of the competition?</Instructions>
              <FormField name="organizer" label="Organizer" />
              <Instructions>
                What organization, company or school is organizing the
                competition?
              </Instructions>
              <FormField
                name="competition_url"
                label="Competition URL"
                validate={validateUrl}
                onBlur={() => {
                  const url = values.competition_url
                  if (!url.match(/^https?:\/\//)) {
                    setFieldValue("competition_url", `http://${url}`)
                  }
                }}
              />
              <Instructions>
                Enter the full web-address to the competition’s website.
              </Instructions>
              <FormField
                name="submitter_email"
                label="Your email address"
                validate={validateEmail}
              />
              <FormField
                name="deadline"
                label="Competition deadline"
                type="date"
              />
              <FormField
                name="summary"
                label="Prize summary"
                component={Textarea}
              />
              <Instructions>
                Write a short summary about the competition and the prize in no
                more than 180 characters.
              </Instructions>
              <FormField
                name="description"
                label="Description"
                component={Textarea}
              />
              <Instructions>
                Write a full description of the competition, its background and
                purpose.
              </Instructions>
              <FormField
                name="prize"
                label="Prize"
                component={Dropdown}
                items={prizes}
                placeholder="Select prize category"
              />
              <Instructions>Please select a prize category.</Instructions>
              <FormField
                name="region"
                label="Region"
                component={Dropdown}
                items={regions}
                placeholder="Select region"
              />
              <Instructions>
                Please select what region the competition is open for.
              </Instructions>
              <FormField
                name="education_level"
                label="Education level"
                component={Dropdown}
                items={educationLevels}
                placeholder="Select level"
              />
              <Instructions>
                Please select what education level the competition is open for.
              </Instructions>
              <FormField
                name="categories"
                label="Category"
                component={Dropdown}
                items={categories}
                placeholder="Select category"
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit a new competition"}
              </button>
            </Form>
          )}
        </Formik>
      </Section>
    </Layout>
  )
}

export default NewCompetition

import React, { FormEvent, useRef, useState } from "react";
import { Stack, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NewNote, Tags } from "../App";

type FormProps = {
  onSubmit: (info: NewNote) => void;
};

const NForm = ({ onSubmit }: FormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [tagList, setTag] = useState<Tags[]>([]);

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      message: messageRef.current!.value,
      tags: [],
    });
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Stack gap={3}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Titel</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                // Update Tag List
                onChange={(tags) =>
                  setTag(
                    tags.map((tag) => {
                      return { title: tag.title, id: tag.value };
                    })
                  )
                }
                // Import tag list for Edit
                value={tagList.map((tag) => {
                  return { title: tag.title, value: tag.id };
                })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="message">
              <Form.Label>Nachricht</Form.Label>
              <Form.Control ref={messageRef} required as="textarea" rows={12} />
            </Form.Group>
          </Col>
        </Row>
        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit" variant="primary">
            Speichern
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Ablehnen
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NForm;

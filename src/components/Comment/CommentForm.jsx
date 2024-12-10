import useForm from "@hooks/useForm";
import { FieldItem, Form, Textarea } from "@components/Field";
import { Section } from "@components/Section";
import { Author, Button } from "@components/ui";
import { commentSchema } from "./schema";
import styles from "./CommentForm.module.scss";

export function CommentForm({
  initialData = {},
  onCommentSubmit,
  onClose,
  isEdit,
}) {
  const { formError, isFormValid, isLoading, handleSubmit, register, reset } =
    useForm(commentSchema, initialData);

  function handleClose() {
    reset();
    onClose();
  }

  const message = isEdit
    ? "성공적으로 수정했습니다."
    : "성공적으로 작성했습니다.";

  async function onSubmit(data) {
    try {
      await onCommentSubmit(data);
      alert(message);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  }

  return (
    <Form
      isLoading={isLoading}
      error={formError}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Section>
        <Section.Content>
          <FieldItem>
            {!isEdit && (
              <FieldItem.Label htmlFor="content">문의하기</FieldItem.Label>
            )}
            <Textarea
              size="sm"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...register("content")}
            />
          </FieldItem>
        </Section.Content>
        <Section.Footer>
          {isEdit ? (
            <div className={styles.meta}>
              <Author
                avatar={initialData.writer.mage}
                nickname={initialData.writer.nickname}
                updatedAt={initialData.updatedAt}
              />
              <div className={styles.controls}>
                <Button
                  variant="text"
                  color="secondary"
                  size="sm"
                  onClick={handleClose}
                >
                  취소
                </Button>
                <Button type="submit" size="sm" disabled={!isFormValid}>
                  수정 완료
                </Button>
              </div>
            </div>
          ) : (
            <Button type="submit" size="sm" disabled={!isFormValid}>
              등록
            </Button>
          )}
        </Section.Footer>
      </Section>
    </Form>
  );
}

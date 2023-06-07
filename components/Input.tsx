import { TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export function SearchInput(props: TextInputProps) {
  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      placeholder="검색하기"
      rightSectionWidth={42}
      {...props}
    />
  );
}

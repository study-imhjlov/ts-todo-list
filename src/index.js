class Todo {
  /**
   * Create Todo
   * @constructor
   * @param {number} id - 할 일의 내용
   * @param {string} text - 할 일의 내용
   * @param {string} category - 할 일의 카테고리
   * @param {string[]} [tagList=[]] - 할 일의 태그들
   */
  constructor(id, text, category, tagList) {}

  /**
   * 할 일의 내용을 변경한다.
   * @param {string} text - 변경할 할 일 내용
   */
  updateText(text) {}

  /**
   * 할 일의 카테고리를 변경한다.
   * @param {string} category - 새로운 카테고리
   */
  updateCategory(category) {}

  /**
   * 할 일의 태그 목록을 변경한다.
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTagList(tagList) {}

  /**
   * 할 일의 완료 상태를 토글한다.
   */
  toggleCompleted() {}
}

class TodoList {
  /**
   * Create TodoList
   * @constructor
   * @param {Todo[]} [initTodoList=[]] - 초기값으로 설정할 할 일 목록
   */
  constructor(initTodoList) {}

  /**
   * 모든 할 일 목록을 조회한다.
   * @returns {Todo[]}
   */
  getTodoList() {}

  /**
   * 특정 할 일을 조회한다.
   * @param {number} id
   * @returns {Todo}
   */
  getTodoById(id) {}

  /**
   * 새로운 할 일을 추가한다.
   * @param {Todo} todo - 새로 추가할 할 일
   */
  addTodo(todo) {}

  /**
   * 특정 할 일에 태그를 추가한다.
   * @param {number} id
   * @param {string} tag
   */
  tagTodo(id, tag) {}

  /**
   * 특정 할 일 내용을 변경한다.
   * @param {number} id
   * @param {string} text
   */
  updateTodoText(id, text) {}

  /**
   * 특정 할 일의 완료 상태를 토글한다.
   * @param {number} id - 완료 상태를 변경할 할 일의 id
   */
  toggleTodoCompleted(id) {}

  /**
   * 특정 할 일 카테고리를 변경한다.
   * @param {number} id - 카테고리를 변경할 할 일의 id
   * @param {string} category - 새로운 카테고리
   */
  updateTodoCategory(id, category) {}

  /**
   * 특정 할 일 태그 목록을 변경한다.
   * @param {number} id - 태그를 변경할 할 일의 id
   * @param {string[]} tagList - 새로운 태그 목록
   */
  updateTodoTagList(id, tagList) {}

  /**
   * 특정 할 일을 삭제한다.
   * @param {number} id - 삭제할 할 일의 id
   */
  removeTodo(id) {}

  /**
   * 모든 할 일을 삭제한다.
   */
  removeAllTodo() {}

  /**
   * 특정 할 일의 특정 태그를 삭제한다.
   * @param {number} id - 태그를 삭제할 할 일의 id
   * @param {string} tag - 삭제할 태그의 텍스트
   */
  removeTodoTag(id, tag) {}

  /**
   * 특정 할 일의 모든 태그를 삭제한다.
   * @param {number} id - 모든 태그를 삭제할 할 일의 id
   */
  removeTodoAllTag(id) {}
}
